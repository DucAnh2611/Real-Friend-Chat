const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "id21383452_friend_chat"
});

function execute(query, params = []) {
    return new Promise((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                reject(err);
            }
            else resolve(res);  
        });
    });
}

function executeGetId(query, params = []) {
    return new Promise((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                reject(err);
            }
            else resolve(res.insertId); 
        });
    });
}

module.exports = {
    execute: execute,
    executeGetId: executeGetId
};