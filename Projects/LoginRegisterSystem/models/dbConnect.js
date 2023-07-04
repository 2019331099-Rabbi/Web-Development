const mysql = require('mysql');

const myDB = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

myDB.connect((err) => {
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
        myDB.query(sql, (error, results, fields) => {
            if (error) {
                
                return;
            }
            console.log("Table created or already exist");
        });
    }
});

module.exports = myDB;