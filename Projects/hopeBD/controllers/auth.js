const myDB = require('../models/dbConnect');
const bcrypt = require('bcryptjs');
const { log } = require('console');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.registerD = async (req, res) => {

    const { name, email, password, passwordConfirm } = req.body;
    const existUser = "SELECT email FROM donor WHERE email = ? UNION SELECT email FROM collector WHERE email = ?";
    myDB.query(existUser, [email, email], async (error, results) => {
        if (error) {
            return res.status(500).render('registerDonor', {message: "Internal server error"});
        }
        else if (results.length > 0) {
            return res.render('registerDonor', {message: "This email is already in use"});   
        }
        else if (password !== passwordConfirm) {
            return res.render('registerDonor', {message: "Password don't match"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const insertUser = "INSERT INTO donor (name, email, password) VALUES (?, ?, ?)";

        myDB.query(insertUser, [name, email, hashedPassword], async (error, results) => {
                if (error) console.log(error);
                else {
                    return res.status(200).render("registerDonor", {
                        message: "User successfully registered",
                    });
                }
            }
        );
    });
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).render('login', {
                message: "Please provide email and password"
            });
        }
        const checkUserInfo = "(SELECT email, password FROM donor WHERE email = ?) UNION (SELECT email, password FROM collector WHERE email = ?);";
        myDB.query(checkUserInfo, [email, email], async (error, results) => {
            if (error) {
                return res.status(500).render('login', {
                    message: "Internal Server Error"
                });
            }
            if (!results.length || !(await bcrypt.compare(password, results[0].password))) {
                return res.status(401).render('login', {
                    message: "Email or Password is incorrect"
                });
            }
            const email = results[0].email;
            const token = jwt.sign({ email }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_TOKEN_EXPIRESIN
            });

            const cookieOptions = {
                exprires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000),
                httpOnly: true
            };
            res.cookie('jwt', token, cookieOptions);
            res.redirect("/");
        });
        
    } catch (error) {
        console.log(error);
    }
};

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // Verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

            // Check if the user still exists
            const checkUserExistDonor = 'SELECT * FROM donor WHERE email = ?';
            const checkUserExistCollector = 'SELECT * FROM collector WHERE email = ?';

            const queryDonor = promisify(myDB.query).bind(myDB);
            const queryCollector = promisify(myDB.query).bind(myDB);

            const resultsDonor = await queryDonor(checkUserExistDonor, [decoded.email]);
            const resultsCollector = await queryCollector(checkUserExistCollector, [decoded.email]);

            if (resultsDonor.length) {
                req.user = resultsDonor[0];
                req.type = 'donor';
            } else if (resultsCollector.length) {
                req.user = resultsCollector[0];
                req.type = 'collector';
            }
            return next();
        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        next();
    }
};

exports.logout = (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(201).redirect('/');
};
