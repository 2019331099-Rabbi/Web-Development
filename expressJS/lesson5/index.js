// Handling form data
const express = require("express");
const multer  = require('multer');
const mysql = require('mysql');
const PORT = 3000;
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/');
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post('/register', upload.single('file'), (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const photo = req.file.filename;
    res.send(`Name: ${name}, Age: ${age}, Photo: ${photo}`);
});

app.listen(PORT, () => {
    console.log("Server run success");
});
