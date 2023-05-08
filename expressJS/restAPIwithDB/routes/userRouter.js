const express = require('express');
const bodyParser = require('body-parser');
const { getUsers, getOneUser, createOrDeleteUser } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.use(bodyParser.urlencoded({ extended: true }));

userRouter.get("/", getUsers);
userRouter.get("/:id", getOneUser);
userRouter.post("/", createOrDeleteUser);

module.exports = userRouter;