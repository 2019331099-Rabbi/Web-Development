const express = require("express");
const mysql = require("mysql");
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv.config({path: './.env'});
const app = express();

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
        const sql = `CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                PRIMARY KEY (id, email)
            );`;
        db.query(sql, (error, results, fields) => {
            if (error) {
                console.error("Error creating table:", error);
                return;
            }
            console.log("Table created or already exist");
        });
    }
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Define routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(3000, () => {
    console.log("Server run success");
});
