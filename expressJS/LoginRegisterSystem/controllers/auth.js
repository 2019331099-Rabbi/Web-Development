const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

exports.register = (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;
    const checkUserExist = "SELECT email FROM users WHERE email = ?";
    db.query(checkUserExist, [email], async (error, results) => {
        if (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        } else {
            if (results.length > 0) {
                return res.render("register", {
                    message: "This email is already in use",
                });
            } else if (password !== passwordConfirm) {
                return res.render("register", {
                    message: "Password do not match",
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const insertUser = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            db.query(insertUser, [name, email, hashedPassword], async (error, results) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log(results);
                    return res.render("register", {
                        message: "User successfully registered"
                    });
                }
            })

        }
    });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).render("login", {
                message: "please provide email and password"
            });
        }
        const checkUserInfo = "SELECT * FROM users WHERE email = ?";
        db.query(checkUserInfo, [email], async (error, results) => {
            if (error) {
                console.log(error.message);
                res.status(500).send("Internal Server Error");
            }
            else {
                console.log(results);
                if (!results || !(await bcrypt.compare(password, results[0].password))) {
                    return res.status(401).render("login", {
                        message: "Email or Password is incorrect"
                    });
                }
                const id = results[0].id;
                const token = jwt.sign({id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 25 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect("/");
            }
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
            db.query(checkUserExist, [decoded.id], (error, results) => {
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
    res.status(200).redirect('/');
}