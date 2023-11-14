const express = require('express');
const router = express.Router();
const { execute, executeGetId } = require("../routes/_mysql");
const auth = require("./_auth");

router.get('/all', auth, async (req, res) => {
  let { user_id } = req.user;
  let { page } = req.query;

  let list = await execute(`
    SELECT tg.*, tgu.notify
    (SELECT content, type, deleted, tu.name FROM tb_message AS tb INNER JOIN tb_user AS tu ON tb.user_id = tu.id ORDER BY send DESC LIMIT 1)
    FROM tb_group_user AS tgu INNER JOIN tb_group AS tg ON tgu.group_id = tg.id 
    WHERE tgu.user_id = ${user_id}
    LIMIT 15
    OFFSET ${15*(page-1)}
  `);

  res.json({ status: "ok", list: list});
});

router.post("/create", auth, async (req, res) => {

  let { user_id } = req.user;
  let { name, userids, avatar } = req.body;

  let newGroupId = await execute(`INSERT INTO tb_group ( id, name, modify, avatar, 1 )
  VALUES (NULL, '${name}', NOW(), '${avatar}')
  `);

  if(newGroupId) {
    await execute(`
    INSERT INTO tb_group_user( user_id, group_id, role, nickname, notify, is_leave, modify) 
    VALUES(${user_id}, ${newGroupId}, 1, (SELECT name FROM tb_user WHERE id = ${user_id}), 1, 0, NOW())`);

    userids.forEach(async e => {
      await execute(`
      INSERT INTO tb_group_user( user_id, group_id, role, nickname, notify, is_leave, modify) 
      VALUES(${e.id}, ${newGroupId}, 0, (SELECT name FROM tb_user WHERE id = ${e.id}), 1, 0, NOW())`);
    });
    res.json({status: "ok"});
  }
  else res.status(401).json({status: "fail"});

});

router.get('/:groupid/info', auth, async (req, res) => {
  let { user_id } = req.user;
  let { type, page } = req.query;

  let list = await execute(`
    SELECT tg.*, tgu.notify
    (SELECT content, type, deleted, tu.name FROM tb_message AS tb INNER JOIN tb_user AS tu ON tb.user_id = tu.id ORDER BY send DESC LIMIT 1)
    FROM tb_group_user AS tgu INNER JOIN tb_group AS tg ON tgu.group_id = tg.id 
    WHERE tgu.user_id = ${user_id}
    LIMIT 15
    OFFSET ${15*(page-1)}
  `);

  res.json({ status: "ok", list: list});
});

router.put("/:groupid/:targetid/leave", auth, async (req, res) => {

  let { user_id } = req.user;
  let { groupid, targetid } = req.params;

  let getUser = await execute(`
  SELECT * FROM tb_group_user WHERE user_id = ${user_id} AND group_id = ${groupid} AND is_leave = 0`);

  if(getUser.length === 1 && (parseInt(getUser[0].role) === 1 || parseInt(getUser[0].id) == parseInt(user_id)) && parseInt(getUser[0].is_leave) === 0) {
    await execute(`
    UPDATE tb_group_user
    SET is_leave = 1
    WHERE user_id = ${targetid} AND group_id = ${groupid}`);

    res.json({status: "ok", message: "Successfully leave!"});
  }
  else if(getUser.length === 0 && parseInt(getUser[0].is_leave) === 0) res.json({status: "fail", message: "User is not in this group"});
  else res.status(401).json({status: "fail", message: "User doesn't have permission"});

});

router.put("/:groupid/:targetid/update", auth, async (req, res) => {

  let { user_id } = req.user;
  let { groupid, targetid } = req.params;
  let body = req.query;

  let getUser = await execute(`
  SELECT role FROM tb_group_user WHERE user_id = ${user_id} AND group_id = ${groupid} AND is_leave = 0`);

  if(getUser.length === 1 && parseInt(getUser[0].role) === 1 && parseInt(getUser[0].is_leave) === 0) {

    await execute(`
    UPDATE tb_group_user
    SET ${Object.entries(body).reduce((acc, curr, index) => {
      let [field, data] = curr;

      return Object.entries(body).length -1 !== index ? `${field} = ${data},` : `${field} = ${data}` ;
    }, "")}
    WHERE user_id = ${targetid} AND group_id = ${groupid}`);

    res.json({status: "ok", message: "Successfully update!"});
  }
  else if(getUser.length === 0 && parseInt(getUser[0].is_leave) === 0) {
    await execute(`
    INSERT INTO tb_group_user( user_id, group_id, role, nickname, notify, is_leave, modify) 
    VALUES(${targetid}, ${groupid}, ${role}, (SELECT name FROM tb_user WHERE id = ${targetid}), 1, 0, NOW())`);
    
    res.json({status: "ok", message: "Successfully add!"});
  }
  else res.status(401).json({status: "fail", message: "User doesn't have permission"});

});


module.exports = router;
