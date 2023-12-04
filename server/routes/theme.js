const express = require('express');
const router = express.Router();
const { execute, executeGetId } = require("../routes/_mysql");
const { createTheme, updateTheme, getTheme } = require("./Model/ThemeModel");
const auth = require("./_auth");

router.get('/all', async (req, res) => {
	let { page } = req.query;
	
	getTheme( 0, page, 0).then(data => {
		res.json({status: "ok", data: data});		
	});

});

router.post('/create', auth ,async (req, res) => {

	createTheme(req.user, req.body).then( data => {
		if(data) res.json({status: "ok", theme: {...req.body}}); 
		else res.json({status: "fail"});		
	});

});

router.put('/change', auth ,async (req, res) => {

	let {user_id} = req.user;
	let body = req.body;

	getTheme(body.id, 0 , 0).then(list => {
		if(list.length == 1 && list[0].owner === user_id) {
			updateTheme(req.user, body).then(result => {
				if(result) res.json({status: "ok"});
				else res.status(401).json({status: "fail", message: "User not own this theme"});
			});
		} 
		else res.status(401).json({status: "fail", message: "User not own this theme"});
	});

});


module.exports = router;
