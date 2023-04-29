const express = require("express");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//     // let id = req.query.id;
//     // let age = req.query.age;
//     let { id, age } = req.query;
//     res.send(`student id ${id} age ${age}`);

//     //url = http://localhost:3000?id=22&age=27
// });

// request with route parameter
app.get("/userID/:id/userAge/:age", (req, res) => {
    // let id = req.params.id;
    // let age = req.params.age;
    let {id, age} = req.params;
    res.send(`student id ${id} age ${age}`);

    //url = http://localhost:3000/userID/22/userAge/27
});


// reques with header
app.get("/", (req, res) => {
    let id = req.header('id');
    let age = req.header('age');
    
    res.send(`student id ${id} age ${age}`);

    //url = http://localhost:3000?id=22&age=27
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
