const express = require("express");
const publicRouter = express.Router();

const logger = (req, res, next) => {
    console.log("I am logging something");
    next();
};

// publicRouter.use(logger);
publicRouter.all("*", logger);

publicRouter.get("/", (req, res) => {
    res.send("Hello form home route");
});

publicRouter.get("/about", (req, res) => {
    res.send("Hello form about route");
});

publicRouter.param('user', (req, res, next, ID) => {
    req.user = (ID === '1')?'Admin':'Normal user';
    next();
});

publicRouter.get('/:user', (req, res) => {
    const ID = req.params.user;
    res.send(`User ID: ${ID}, ${req.user}`);
});



module.exports = publicRouter;
