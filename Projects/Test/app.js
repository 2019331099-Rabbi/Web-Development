const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'hbs');
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.listen(3000, () => {
    console.log("server run successfully");
});
