// Handling json data using post request
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
    // let jsonData = req.body;
    // let jsonString = JSON.stringify(jsonData);
    // res.send(jsonString);

    let name = req.body.name;
    let age = req.body['age'];//alternative way
    res.send(name + "    " + age);
})


app.listen(PORT, () => {
    console.log("Server run success");
})
