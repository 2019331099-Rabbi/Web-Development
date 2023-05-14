const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const connection = require('../models/userModel');
const userRouter = express.Router();

userRouter.use(express.urlencoded({ extended: true }));
userRouter.use(express.json());

// base url
userRouter.get("/", (req, res) => {
    res.render("index");
});

// register - get
userRouter.get("/register", (req, res) => {
    res.render("register");
});

// register - post
userRouter.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        let email = req.body.email;
        let password = hash;

        let sql = `SELECT * from users WHERE email = '${email}'`;
        connection.query(sql, (selectError, result) => {
            if (selectError) return res.status(500).json({ error: 'Select data Error' });
            if (result.length > 0) {
                console.log(result);
                return res.json({ error: 'Email already exists' });
            }
            else {
                sql = `INSERT INTO users (email, password) values ('${email}', '${password}')`;
                connection.query(sql, (insertError, result) => {
                    if (insertError) return res.status(500).json({ error: 'Insert Data Error' });
                    console.log(`Form data inserted into the database: ${result.affectedRows} row(s) affected`);
                });
                res.status(201).redirect("/login");
            }
        });
    });
});

// login - get
userRouter.get("/login", (req, res) => {
    res.render("login");
});

const secretKey = "shahed";

// login - post
userRouter.post("/login", (req, res) => {
    const email = req.body.email;
    const givenPassword = req.body.password;

    const sql = `SELECT * from users WHERE email = '${email}'`;
    connection.query(sql, (selectErr, result) => {
        if (selectErr) throw selectErr;
        if (result.length > 0) {

            const hashedPassword = result[0].password;
            bcrypt.compare(givenPassword, hashedPassword, (matchErr, isMatch) => {
                if (matchErr) throw matchErr;
                if (isMatch) {
                    const token = jwt.sign({ email: result[0].email }, secretKey, { expiresIn: '300' });
                    res.redirect(`/profile?token=${token}`);
                }
                else res.json({ msg: "Password incorrect" });
            });
        }
    })
});

// profile - protected
userRouter.get("/profile", (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, secretKey);
        const email = decoded.email;
        const sql = `SELECT email from users WHERE email = '${email}'`;
        connection.query(sql, (selectErr, result) => {
            if (selectErr) throw selectErr;
            if (result.length > 0) {
                res.render("profile");
            }
            else res.status(404).json({ error: 'User not found' });
        })

    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

// logout
userRouter.get("/logout", (req, res) => {
    res.redirect("/");
});

module.exports = userRouter;