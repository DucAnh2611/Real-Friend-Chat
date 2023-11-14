var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
const { execute, executeGetId } = require("../routes/_mysql");
const auth = require("./_auth");
require('dotenv').config();

/* GET users listing. */
router.get('/find', auth ,async (req, res) => {
  let { user_id } = req.user;
  let { key, page } = req.query;
  let listUser = await execute(`SELECT * FROM tb_user WHERE name LIKE '%${key}%' AND id != ${user_id} LIMIT 10 OFFSET ${10*(page-1)}`);

  res.json({status: "ok", data: listUser});
});

router.post('/signup', async (req, res) => {

  let {account, name, email, password, avatar} = req.body;

  let check = await execute(`SELECT * FROM tb_user WHERE email = '${email}' AND account = '${account}'`);
  if(check.length != 0 ){
    res.json({status: "fail", message: "Exist user"});
  }
  else {
    let insert = await executeGetId(`
    INSERT INTO tb_user (id, name, account, pass, email, online, show_online, last_online, modify, avatar) 
    VALUES (NULL, '${name}', '${account}','${password}', '${email}', false, true, NOW(), NOW(), '${avatar}')`);

    let token = await jwt.sign(
      {user_id: insert, email},
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h"
      }
    )

    res.json({status: "ok", 
      user : {
        id: insert,
        token: token
      }
    });
  }
});

router.post('/login', async (req, res) => {

  let {account, password} = req.body;

  let check = await execute(`SELECT * FROM tb_user WHERE account = '${account}'`);
  if(check.length != 0 ){
    res.status(401).json({status: "fail", message: "No user"});
  }
  else if(check[0].pass !== password) {
    res.status(401).json({status: "fail", message: "No user"});
  }
  else {
    let user = check[0];

    let token = jwt.sign(
      {user_id: user.id, email},
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h"
      }
    )

    res.json({status: "ok", 
      user : {
        id: insert,
        name: user.name,
        avatar: user.avatar,
        account: account,
        token: token
      }
    });
  }
});

module.exports = router;
