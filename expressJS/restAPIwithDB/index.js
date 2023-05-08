const express = require('express');
const userRouter = require('./routes/userRouter');
const app = express();
const PORT = 3000;

app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log("Server run success");
})