const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userRouter);

app.listen(3000, () => {
    console.log("Server run success");
})