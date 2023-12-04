const express = require('express');
const router = express.Router();
const { execute, executeGetId } = require("../_mysql");
const { send } = require("../Model/MessageModel");
const auth = require("../_auth");

router.post('/send', auth, async (req, res) => {
  let { user_id } = req.user;

  send(user_id, req.body).then((data) => {
    if(data) res.json({status: "ok", message: {id: data}});
    else res.json({ status: 'fail' });    
  });

});

router.put('/update', auth, async (req, res) => {

  let {user_id} = req.user;
  let {id, groupid, type, value} = req.query;

  let getUser = await execute(`SELECT * FROM tb_group_user WHERE user_id = ${user_id} AND group_id = ${groupid} AND is_leave = 0`);
  if(getUser.length !== 0 && getUser[0].is_leave === 0 ) {
    await executeGetId(`UPDATE tb_message SET ${type} = ${value} WHERE id = ${id}`);    
      
    res.json({status: "ok", message: "Succesfully deleted!"});    
  }
  else {
    res.status(401).json({status: "fail", message: "User don't have permission to do this action"});    
  }
 
});


router.get('/:groupid', auth, async (req, res) => {

  let { user_id } = req.user;
  let { groupid } = req.params;
  let { key } = req.query;
  
  let checkUserGroup = await execute(`
    SELECT *, (SELECT COUNT(*) FROM tb_group_user WHERE group_id = ${groupid} ) AS "member"
    FROM tb_group_user 
    WHERE group_id = ${groupid} AND user_id = ${user_id}`);

  if(checkUserGroup.length === 1) {
    let list = await execute(`
    SELECT id, content, tu.id AS userid, tgu.nickname, tu.avatar, type, deleted, pin, send
    FROM tb_message AS tm INNER JOIN tb_user AS tu ON tm.user_id = tu.id
                          INNER JOIN  tb_group_user AS tgu ON tu.id = tgu.userid
    WHERE group_id = ${groupid} 
      AND content LIKE '%${key}%' 
      ${key !== "" ? `AND type = 1` :""} 
      ${checkUserGroup[0].is_leave === 0 ? `AND send <= ${checkUserGroup[0].modify} `: ""} `);

    list = list.map(async (e, ) => {
      let seenPeople = await execute(`
      SELECT tu.name, tu.id, tu.avatar, tb_message_seen.seen_at 
      FROM tb_message_seen AS tms INNER JOIN tb_user AS tu ON tms.user_id = tu.id 
      WHERE message_id = ${e.id} `);
      return e.user_id === user_id 
      ? {
        ...e,
        content: ""
      }
      : {
        ...e,
        seen: (checkUserGroup.member === seenPeople && i !== list.length - 1) ? 0 : seenPeople
      }
    });

    res.json({status: "ok", data: list});
  }
  else {
    res.status(401).json({status: "fail", message: "User is not in group"});
  }
  

  res.json({});
});

module.exports = router;
