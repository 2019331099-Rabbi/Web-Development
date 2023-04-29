const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/views/circle.html");
})

app.get("/rectangle", (req, res) => {
    res.sendFile(__dirname + "/views/rectangle.html");
})

app.post("/circle", (req, res) => {
    let radius = req.body.radius;
    let area = Math.PI * radius * radius;
    res.end("Circle area = " + area);
})

app.post("/rectangle", (req, res) => {
    let width = req.body.width;
    let height = req.body.height;
    let area = width * height;
    res.end("Area of rectangle = " + area);
})

app.listen(PORT, () => {
    console.log('Server run success');
})