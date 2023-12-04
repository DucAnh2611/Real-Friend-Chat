const { execute, executeGetId } = require("../_mysql");
const DEFAULT_ITEM_PAGE = 15;

const createGroup = (user_id, body) => {
    
    return new Promise(async (resolve, reject) => {
        let { name, userids, avatar } = body;

        let newGroupId = await executeGetId(`INSERT INTO tb_group ( id, name, modify, avatar, theme_id, state )
        VALUES (NULL, ?, NOW(), ?, 1, '')
        `, [name, avatar]);
    
        if(newGroupId) {
            await execute(`
            INSERT INTO tb_group_user( user_id, group_id, role, nickname, notify, is_leave, modify) 
            VALUES(?, ?, 1, (SELECT name FROM tb_user WHERE id = ?), 1, 0, NOW())`,
            [user_id, newGroupId, user_id]);
        
            userids.forEach(async e => {
                await execute(`
                INSERT INTO tb_group_user( user_id, group_id, role, nickname, notify, is_leave, modify) 
                VALUES(?, ?, 0, (SELECT name FROM tb_user WHERE id = ?), 1, 0, NOW())`,
                [e.id, newGroupId, e.id]);
            });
            resolve(newGroupId);
        }        
        else {
            reject(-1);
        }
    })

} 

const updateGroup = (conditions, arrData, value) => {
    return new Promise(async (resolve, reject) => {
        let query = `UPDATE tb_group SET `;
        let condition = `WHERE true && ${conditions.reduce((acc, curr) => {
            return acc  += `${curr} = ?`
        }, "")}`;

        query += arrData.reduce((acc, field, index) => {
            
            return acc += `${field} = ? ${index === arrData.length-1 ?"" : ", "}`;
        }, "");

        let update = await execute(`${query} ${condition}`, [arrData, value]);      

        if(update) {
            resolve(1);
        }  
        else {reject(-1);}
    });
}

const getGroup = (conditions, currentPage = 1, item = DEFAULT_ITEM_PAGE) => {
    return new Promise(async (resolve, reject) => {
        let query = `SELECT * FROM tb_group`;
        let condition = `WHERE true && ${Object.keys(conditions).reduce((acc, curr) => {
            return acc += `${curr} = ?`
        }, "")}`;

        let select = await execute(`${query} ${conditions.length !== 0 ? condition : ""} LIMIT ${item} OFFSET ${item*(currentPage-1)}`, Object.values(conditions)); 

        if(select) resolve(select);
        else reject(-1);
    });
}

const getGroupUnread = (user_id, currentPage = 1, item = DEFAULT_ITEM_PAGE) => {
    return new Promise(async (resolve, reject) => {
        let list = await execute(`
            SELECT tg.*,
            (SELECT COUNT(*) FROM tb_mesage WHERE id > (SELECT messageid FROM tb_message_seen WHERE userid = ${user_id} LIMIT 1 ORDER BY send DESC)) as "unread"
            FROM tb_group_user AS tgu INNER JOIN tb_group AS tg
            WHERE tgu.user_id = ${user_id}
            ORDER BY send DESC
            LIMIT ${item}
            OFFSET ${15*(currentPage-1)}
        `);

        if(list) resolve(list);
        else reject(-1);
    });
}

const getLastSeenGroup = (groupid) => {
    return new Promise(async (resolve, reject) => {
        let seen =  await execute(`
          SELECT tu.avatar, tgu.nickname, tu.seen_at
          FROM tb_user AS tu INNER JOIN tb_group_user AS tgu ON tu.id = tgu.user_id  
                            INNER JOIN tb_message_seen AS tms ON tgu.user_id = tms.userid 
          WHERE messageid = (SELECT id FROM tb_message WHERE group_id = ${groupid} LIMIT 1 ORDER BY send DESC)`);
        if(seen) resolve(seen);
        else reject(-1);
    })
}

module.exports = {
    createGroup: createGroup,
    updateGroup: updateGroup,
    getGroup: getGroup,
    getGroupUnread: getGroupUnread,
    getLastSeenGroup: getLastSeenGroup
}