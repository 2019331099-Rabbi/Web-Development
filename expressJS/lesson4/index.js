// Handling form data
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    res.send(`Email: ${email}, Password: ${password}`);
});

app.listen(PORT, () => {
    console.log("Server run success");
});
