const express = require('express');
const multer = require('multer');
const path = require('path');
const { getUsers } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get("/", getUsers);

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

userRouter.post("/", upload.single('image'), (req, res) => {
    res.status(200).send("File upload success");
});


module.exports = userRouter;