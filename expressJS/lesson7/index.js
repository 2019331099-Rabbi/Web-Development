const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

//Application level middleware: works on whole application

// app.use((req, res, next) => {
//     console.log(`Incoming request from route: ${req.originalUrl}`);
//     if (req.originalUrl == "/about") console.log(" I am from about route");
//     else if (req.originalUrl == "/") console.log("I am from home route");
//     else if (req.originalUrl == "/contact") console.log("I am from contact route");
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Hello from home route");
// });

// app.get("/about", (req, res) => {
//     res.send("Hello from about page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Hello from contact page");
// });


// Router level middleware

// app.use("/", (req, res, next) => {
//     console.log("I am middleware of home route");
//     next();
// })

// app.use("/about", (req, res, next) => {
//     console.log("I am middleware of about route");
//     next();
// })

// app.use("/contact", (req, res, next) => {
//     console.log("I am middleware of contact route");
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Hello from home route");
// });

// app.get("/about", (req, res) => {
//     res.send("Hello from about page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Hello from contact page");
// });

const logger = (req, res, next)=> {
    let date = new Date(Date.now());
    let method = req.method;
    let url = req.originalUrl;
    let protocol = req.protocol;
    let ip = req.ip;
    console.log(date.toLocaleString(), method, url, protocol, ip);
    next();
}

const adminRouter = express.Router();

adminRouter.use(logger); // Middleware only applies to /admin route

adminRouter.get("/", (req, res) => {
    res.send("From admin route home");
});

adminRouter.get("/dashboard", (req, res) => {
    res.send("From admin route dashboard");
});

app.use('/admin', adminRouter);

app.get("/", (req, res) => {
    res.send("From home route");
});

app.listen(PORT, () => {
    console.log("Server run success");
});