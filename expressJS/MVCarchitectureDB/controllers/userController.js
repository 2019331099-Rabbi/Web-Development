const path = require('path');
const connection = require("../models/userModel");

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUsers = (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    const sql = `INSERT INTO members (name, age) values ('${name}', '${age}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(`Form data inserted into the database: ${result.affectedRows} row(s) affected`);
    });
};