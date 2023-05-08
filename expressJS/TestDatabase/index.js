const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    const sql = `INSERT INTO donorlist (name, email) values ('${name}', '${email}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(`Form data inserted into the database: ${result.affectedRows} row(s) affected`);
        res.end();
    });
    console.log(`Name: ${name}\nEmail: ${email}`);
})

app.listen(3000, () => {
    console.log("Server run success");
});
