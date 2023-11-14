const express = require('express');
const router = express.Router();
const { execute, executeGetId } = require("../routes/_mysql");
const auth = require("./_auth");

/* GET theme */
router.get('/all', async (req, res) => {
	let { page } = req.query;
	let allTheme = await execute(`SELECT * FROM tb_theme LIMIT 20 OFFSET ${20*(page-1)}`);
	
	res.json({status: "ok", data: allTheme});
});

function combineColor(r, g, b, a) {
	return `${r};${g};${b};${a}`;
}

router.post('/create', auth ,async (req, res) => {

	let {user_id} = req.user;
	let {name, bg, first, sec, third, icon} = req.body;

	let insert = await executeGetId(`
	INSERT INTO tb_theme (id, name, background, first, sec, third, icon, owner, modify) 
	VALUES (NULL, '${name}', '${Object.keys(bg).length !== 0 ? combineColor(bg) : bg}', '${combineColor(first)}', '${combineColor(sec)}', '${combineColor(third)}', '${icon}', '${user_id}', NOW())`);

	if(insert) res.json({status: "ok", theme: {...req.body}}); 
	else res.json({status: "fail"});
});

router.put('/change', auth ,async (req, res) => {

	let {user_id} = req.user;
	let body = req.body;
	let dictionary = {
		"name": "name", 
		"bg": "background", 
		"first": "first", 
		"sec": "sec", 
		'third': "third", 
		"icon": "icon",
		"user_id": "owner"
	};

	let checkUser = await execute(`SELECT owner FROM tb_user WHERE id = ${body.id}`);
	if(parseInt(checkUser) === parseInt(user_id)) {
		let setStm = '';
		Object.entries(body).forEach(([key, value]) => {
			setStm += `${dictionary[key]} = ${value}`;
		})

		await execute(`
		UPDATE tb_theme
		SET ${setStm}
		WHERE id = ${body.id}`);
		res.json({status: "ok"});
	}
	else res.status(401).json({status: "fail", message: "User not own this theme"});
});


module.exports = router;
