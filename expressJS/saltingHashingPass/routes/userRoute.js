const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const connection = require("../models/userModel");
const userRouter = express.Router();

userRouter.use(bodyParser.urlencoded({ extended: false }));

userRouter.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        let name = req.body.name;
        let email = req.body.email;
        let password = hash;

        const sql = `INSERT INTO users (name, email, password) values ('${name}', '${email}', '${password}')`;
        connection.query(sql, (dberr, result) => {
            if (dberr) throw dberr;
            console.log(
                `Form data inserted into the database: ${result.affectedRows} row(s) affected`
            );
        });
        res.json({ name, email, password });
    });
});

userRouter.post("/login", (req, res) => {
    const email = req.body.email;
    const userPassword = req.body.password;
    console.log(email);

    // Retrieve the hashed password from the database based on the provided email
    const sql = `SELECT password from users WHERE email = '${email}'`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            const hashedPassword = result[0].password;
            bcrypt.compare(userPassword, hashedPassword, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) res.json({ msg: "User successfully logged in" });
                else res.json({ msg: "Password incorrect" });
            });
        }
        else res.json({ msg: "Invalid Email"});
    });
});

module.exports = userRouter;
