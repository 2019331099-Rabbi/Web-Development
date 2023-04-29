const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.cookie("name", "Fazla Rabbi");
    res.cookie("age", "30");
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
    
});

app.get("/register", (req, res) => {
    // res.clearCookie("name");
    // res.clearCookie("age");
    // res.end();
    // res.statusCode = 201;
    // res.sendFile(__dirname + "/views/register.html");
});

// app.post("/", (req, res) => {
//     res.send("I am post request from home route");
// });

app.use((req, res) => {
    res.end("404! page not found");
});


module.exports = app;
