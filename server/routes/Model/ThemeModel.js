const { execute, executeGetId } = require("../_mysql");
const DEFAULT_ITEM_PAGE = 15;

const createTheme = (user, body) => {
    return new Promise(async (resolve, reject) => {
        let { user_id } = user;
        let {
            name, 
            primaryColor, 
            secondaryColor, 
            keyboardBorder, 
            keyboardBackground, 
            primaryMention, 
            secondaryMention, 
            primaryText, 
            secondaryText, 
            timeColor, 
            nicknameColor, 
            background
        } = body;
    
        let insert = await executeGetId(`
        INSERT INTO tb_theme (id, name, primaryColor, secondaryColor, keyboardBorder, keyboardBackground, primaryMention, secondaryMention, primaryText, secondaryText, timeColor, nicknameColor, background, owner, modify) 
        VALUES (NULL, '${name}', '${primaryColor}', '${secondaryColor}', '${keyboardBorder}', '${keyboardBackground}', '${primaryMention}', '${secondaryMention}' 
                    , '${primaryText}', '${secondaryText}', '${timeColor}', '${nicknameColor}', '${background}', '${user_id}', NOW())`);

        if(insert) resolve(insert);
        else reject(-1);
    });
}

const updateTheme = (user, body) => {
    return new Promise(async (resolve, reject) => {
        let {user_id} = req.user;
        let body = req.body;
    
        let checkUser = await execute(`SELECT owner FROM tb_user WHERE id = ${body.id}`);
        if(parseInt(checkUser) === parseInt(user_id)) {
            let setStm = '';
            Object.keys(body).forEach((key) => {
                setStm += `${dictionary[key]} = /`;
            })
    
            await execute(`
            UPDATE tb_theme
            SET ${setStm}
            WHERE id = ${body.id}`);

            reject(1);
        }
        else reject(-1);
    })
}

const getTheme = (id = 0, page = 0, item=DEFAULT_ITEM_PAGE) => {

    return new Promise(async (resolve, reject) => {

        let checkUser = await execute(`
        SELECT * 
        FROM tb_user 
        WHERE id ${id !== 0 ? `= ${id}` : "!="} ${id} ${page !== 0 ? `LIMIT ${page}` : ""} OFFSET ${item*(page-1)}`);
        if(checkUser) resolve(checkUser);
        else reject(-1);
    
    });
}

module.exports = {
    createTheme: createTheme,
    updateTheme: updateTheme,
    getTheme: getTheme
}