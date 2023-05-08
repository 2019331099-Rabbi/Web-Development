const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'donation'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to the database');

    // Create the 'donor' table if it doesn't exist
    const sql = `CREATE TABLE IF NOT EXISTS donor (
                  id VARCHAR(36) NOT NULL,
                  name VARCHAR(255) NOT NULL,
                  age INT(11) NOT NULL,
                  PRIMARY KEY (id)
                )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Donor table created or already exists');
    });
});

module.exports = connection;