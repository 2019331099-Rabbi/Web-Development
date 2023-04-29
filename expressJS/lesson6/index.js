// handling .env files
// They are used to store sensitive information. works like global variable

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello from home route");
})

app.listen(PORT, () => {
    console.log('Server run success');
})
