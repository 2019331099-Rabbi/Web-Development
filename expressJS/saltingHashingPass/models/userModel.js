const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
    const sql = `CREATE TABLE IF NOT EXISTS users (
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (email)
      )`;
      connection.query(sql, (error, results, fields) => {
        if (error) {
          console.error('Error creating table:', error);
          return;
        }
        console.log('Table created successfully');
      });
});

module.exports = connection;