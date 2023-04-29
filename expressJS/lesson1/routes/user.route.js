const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("I am get request from login route");
});

router.get("/register", (req, res) => {
    res.send("I am get request from register route");
});

module.exports = router;