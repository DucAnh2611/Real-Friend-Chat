const { execute, executeGetId } = require("../_mysql");
const { resStatus } = require("./resultPromise");

const defaultAvatar = 'https://static.thenounproject.com/png/5034901-200.png';
const defaultLimit = 15;

const find = ({userid, key, page, limit = defaultLimit}) => {
  return new Promise( async (resolve, reject) => {
    let check = await execute(`SELECT COUNT(*) FROM tb_user WHERE id =  ?`, [userid]);

    if(check[0].count != 0 ) reject(resStatus.NOT_FOUND);
    else {
        let list = await execute(`
          SELECT id, name, avatar 
          FROM tb_user 
          WHERE name LIKE ? AND id = ?
          LIMIT ?
          OFFSET ?
        `, [`'%${key}%'`, userid, limit, (page-1)*limit]);

        resolve(list);
    }
  })
}

const login = ({email = '', password = ''}) => {
  return new Promise( async (resolve, reject) => {
    let check = await execute(`SELECT id, name, avatar, pass FROM tb_user WHERE email =  ?`, [email]);

    if(check.length != 0 ) reject(resStatus.NOT_FOUND);
    else if(check[0].pass !== password) reject(resStatus.NOT_VALID);
    else {
        let user = check[0];

        resolve({
            id: user.id,
            name: user.name,
            avatar: user.avatar
        });
    }
  })
}

const signup = ({
  email = '', 
  password = '', 
  username = '', 
  avatar = defaultAvatar
}) => {
  return new Promise( async (resolve, reject) => {
    let check = await execute(`SELECT * FROM tb_user WHERE email = ?`, [email]);

    if(check.length != 0 ) reject(resStatus.NOT_VALID);
    else {
        let userid = await executeGetId(`INSERT INTO tb_user (id, name, pass, email, online, show_online, last_online, modify, avatar) 
        VALUES (NULL, ?, ?, ?, 0, 1, NOW(), NOW(), ?)`, [username, password, email, avatar]);

        resolve(resStatus.OK);
    }
  })
}

const update = ({userid, data}) => {
  return new Promise( async (resolve, reject) => {
    let check = await execute(`SELECT pass, email FROM tb_user WHERE id = ?`, [userid]);

    if(check.length != 0 ) reject(resStatus.NOT_FOUND);
    else {
      let queryFetch = Object.keys(data).reduce((acc, curr, index)=> {
        return acc += `${curr} = ? ${index === field.length -1 ? "" : ", "}` ;
      }, "");

      let update = await execute(`
      UPDATE tb_user
      SET ${queryFetch}
      WHERE id = ?
      `, Object.values(data).push(userid));

      resolve(resStatus.OK);
    }
  })
}

module.exports = {
  find: find,
  login: login,
  signup: signup,
  update: update
}