const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("simple string response");
});

app.get("/one", (req, res) => {
    res.end("String response");
});

// json response
app.get("/two", (req, res) => {
    let myJSONArray = [
        {
            name: "Rabbi",
            city: "Dhaka",
            occupation: "Student"
        },
        {
            name: "Shahed",
            city: "Sylhet",
            occupation: "Student"
        }
    ]
    res.json(myJSONArray);
});


// download response
app.get("/three", (req, res) => {
    res.download("./upload/logo.png");
})

// redirect
app.get("/Bangladesh", (req, res) => {
    res.redirect('http://localhost:8000/India');
})

app.get("/India", (req, res) => {
    res.end("This is India");
})

app.get("/four", (req, res) => {
    res.append("name", "Fazla Rabbi"); // added to response body
    res.append("city", "Dhaka");
    res.append("age", "30");

    res.status(201).end("Hello world");
})


// set cookie
app.get("/five", (req, res) => {
    res.cookie("name", "Fazla Rabbi"); // added to response body
    res.cookie("city", "Dhaka");
    res.cookie("age", "30");

    res.status(201).end("Hello world");
})

// clear cookie
app.get("/six", (req, res) => {
    res.clearCookie("name"); // added to response body
    res.clearCookie("city");
    res.clearCookie("age");

    res.status(201).end("Hello world");
})

app.listen(8000, () => {
    console.log("Server run successfully");
});
