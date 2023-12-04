var express = require('express');
var router = express.Router();
const { login, find, update } = require("./Model/UserModel");
const { execute, executeGetId } = require("../routes/_mysql");
const auth = require("./_auth");
const { newToken } = require("./Model/TokenModel");
const { resStatus } = require('./Model/resultPromise');
require('dotenv').config();

/* GET users listing. */
router.get('/find', auth ,async (req, res) => {
  let { user_id } = req.user;
  let { key, page } = req.query;

  find({
    user_id, key, page
  }).then(data => {
    if(data == resStatus.NOT_FOUND) {
      res.json({status: "fail", message: "No data found"});
    }
    else {
      res.json({status: "ok", data: data});      
    }

  })

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


    res.json({status: "ok", hrefCallback: "/"});
  }
});

router.post('/login', async (req, res) => {

  login(req.body)
    .then(data => {
    if(data === - 1){
      res.status(401).json({status: "fail", message: "No user"});
    }
    else if(data === -2) {
      res.status(401).json({status: "fail", message: "Wrong password"});
    }
    else {
      res.json({status: "ok", user : data});
    }    
  });

});

router.put('/update', async (req, res) => {
  let { user_id } = req.user;

  update({
    user_id, data: req.body
  }).then(data => {
    if(data == resStatus.NOT_FOUND) {
      res.json({status: "fail", message: "No data found"});
    }
    else {
      res.json({status: "ok", data: data});      
    }

  })
})

module.exports = router;
