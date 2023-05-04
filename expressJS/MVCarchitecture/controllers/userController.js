const path = require('path');
const users = require('../models/userModel');
const { use } = require('../routes/userRoute');


exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}

exports.saveUsers = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    let user = {name, age};
    users.push(user);
    res.status(201).json({users});
  }