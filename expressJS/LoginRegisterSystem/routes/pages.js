const express = require('express');
const authController = require("../controllers/auth");
const router = express.Router()

router.get("/", authController.isLoggedIn, (req, res) => {
    res.render("index", {
        user: req.user
    });
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/profile", authController.isLoggedIn,  (req, res) => {
    if (req.user) {
        console.log("Token found");
        res.render("profile", {
            user: req.user
        });
    }
    else {
        console.log("Token does not found");
        res.redirect("/login");
    }
});

module.exports = router;