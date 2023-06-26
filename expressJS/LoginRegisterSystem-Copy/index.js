const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv.config({path: './.env'});
const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", require('./routes/pages'));
app.use("/auth", require('./routes/authPages'));

app.listen(process.env.PORT, () => {
    console.log("Server run success");
});