const { execute } = require("../_mysql");
const { resStatus } = require("./resultPromise");

const sendMessage = (props) => {
    return new Promise(async (resolve, reject) => {

        let user_id = props.user_id; 
        let { groupid, type, content } = props.body;

        let newMessageId = await executeGetId(`
        INSERT INTO tb_message( id, group_id, content, user_id, type, deleted, pin, send)
        VALUES (NULL, ?, ?, ?, ?, 0, NOW(), 0)
        `, [groupid, content, user_id, type]);

        if(newMessageId) {
            resolve(newMessageId);
        }
        else reject(resStatus.NOT_FOUND);
    })
}

const deleteMessage = (props) => {
    return new Promise(async (resolve, reject) => {

        let { user_id }  = props.user_id; 
        let { messageid, groupid, type } = props.body;

        if(type === 1) {
            let checkOwnMessage = await execute(`
            SELECT userid FROM tb_message WHERE messageid = ?, group_id = ?
            `, [messageid, groupid]);

            if(checkOwnMessage.length === 0) {
                reject(resStatus.NOT_FOUND);
            }
            else if(parseInt(checkOwnMessage[0].userid) !== parseInt(user_id)) {
                reject(resStatus.NOT_VALID);
            } 
        }

        await executeGetId(`
            UPDATE tb_message 
            SET deleted = ?
            WHERE id = ?
        `, [messageid]);

        resolve(resStatus.OK);
    })
}

module.exports = {
    send: sendMessage,
    delete: deleteMessage
}