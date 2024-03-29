require("dotenv").config();
const express = require('express');
const ejs = require("ejs");
const userRouter = require("./routes/userRouter");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server run success");
});