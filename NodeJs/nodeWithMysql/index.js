const mysql = require('mysql');
const dbConnectionConfig = {host: 'localhost', user: 'root', password: "", database: 'school'}
let db = mysql.createConnection(dbConnectionConfig);
db.connect((err) => {
    if (err) console.log('Connection failed');
    else {
        console.log('Connection success');
        // Insert(db);
        // deleteByReg(db);
        // Update(db);
        Select(db);
    }
});


function Insert(db) {
    let sqlQuery = "INSERT INTO `students`(`name`, `department`, `semester`, `district`) VALUES ('farhad','CSE','31','Vhairab')";
    db.query(sqlQuery, (err) => {
        if (err) console.log('Insert failed');
        else console.log('Insert success');
    });
}


function deleteByReg(db) {
    let sqlQuery = "DELETE FROM `students` WHERE `registration` = '14'";
    db.query(sqlQuery, (err) => {
        if (err) console.log('Delete failed');
        else console.log('Delete success');
    });
}

function Update(db) {
    let sqlQuery = "UPDATE `students` SET `name`='Farhad',`district`='Kishorgonj' WHERE `registration` = 15";
    db.query(sqlQuery, (err) => {
        if (err) console.log('Update failed');
        else console.log('Update success');
    });
}

function Select(db) {
    let sqlQuery = "SELECT * FROM `students`";
    db.query(sqlQuery, (err, result) => {
        if (err) console.log('Select failed');
        else {
            // console.log(result); // json format
            console.log(result[0]);
            console.log(result[0].registration, result[0].name);
        }
    });
}