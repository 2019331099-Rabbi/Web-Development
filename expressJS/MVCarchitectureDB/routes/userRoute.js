const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getUsers, saveUsers } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.use(bodyParser.urlencoded({ extended: true }));

userRouter.get("/", getUsers);
userRouter.post("/", saveUsers);

module.exports = userRouter;