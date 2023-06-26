const myDB = require("../models/dbConnect");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.register = async (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    const existUser = "SELECT email FROM users where email = ?";
    myDB.query(existUser, [email], async (error, results) => {
        if (error) {
            res.status(500).render("register", {
                message: "Internal Server Error",
            });
        } else if (results.length > 0) {
            res.render("register", {
                message: "This email is already in use",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUser =
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        myDB.query(
            insertUser,
            [name, email, hashedPassword],
            async (error, results) => {
                if (error) console.log(error);
                else {
                    return res.status(200).render("register", {
                        message: "User successfully registered",
                    });
                }
            }
        );
    });
};

exports.login = (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).render("login", {
                message: "Please provide email and password"
            });
        }
        const checkUserInfo = "SELECT * FROM users WHERE email = ?";
        myDB.query(checkUserInfo, [email], async (error, results) => {
            if (error) {
                return res.status(500).render("login", {
                    message: "Internal Server Error"
                });
            }
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                return res.status(401).render("login", {
                    message: "Email or Password is incorrect"
                });
            }
            const id = results[0].id;
            const token = jwt.sign({id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_TOKEN_EXPIRESIN
            });
            const cookieOptions = {
                exprires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000),
                httpOnly: true
            };
            res.cookie('jwt', token, cookieOptions);
            res.redirect("/");
        })
    } catch (error) {
        console.log(error);        
    }
};

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // Verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

            // Check if the user still exist
            const checkUserExist = 'SELECT * FROM users where id = ?';
            myDB.query(checkUserExist, [decoded.id], (error, results) => {
                if (!results) return next();
                req.user = results[0];
                return next();
            });
            
        } catch (error) {
            console.log(error);
            return next();
        }
    }
    else next();
};

exports.logout = (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(201).redirect('/');
};