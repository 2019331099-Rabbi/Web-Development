const express = require("express");
const { runValidator } = require("../validation/validation");
const { registerValidator, loginvalidator } = require("../validation/auth");
const {
    registerPage,
    registerUser,
    loginUser,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/register", registerPage);
userRouter.post("/register", registerValidator, runValidator, registerUser);
userRouter.post("/login", loginvalidator, runValidator, loginUser);

module.exports = userRouter;
