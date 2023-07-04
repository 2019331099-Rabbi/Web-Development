const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post("/registerD", authController.registerD);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;