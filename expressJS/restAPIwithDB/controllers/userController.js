const path = require("path");
const connection = require("../models/userModel");
const { v4: uuidv4 } = require('uuid');

const getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
    // res.status(200).json({
    //     message: "Get all user",
    // });
};

const getOneUser = (req, res) => {
    res.status(200).json({
        message: "Get one user",
    });
};

const createOrDeleteUser = (req, res) => {
    const id = uuidv4();
    const name = req.body.name;
    const age = Number(req.body.age);
    const action = req.body.action;
    let sql;
    if (action === 'save') sql = `INSERT INTO donor (id, name, age) VALUES ('${id}', '${name}', '${age}')`;
    else sql = `DELETE FROM donor WHERE name = '${name}' AND age ='${age}'`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Form data inserted into the 'donor' table: ${result.affectedRows} row(s) affected`);
        res.send('Form data received and stored in the database!');
    });

};

const updateUser = (req, res) => {
    res.status(201).json({
        message: "user updated",
    });
};


module.exports = { getUsers, getOneUser, createOrDeleteUser, updateUser };