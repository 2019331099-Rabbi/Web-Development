const express = require('express');
const userRouter = require('./routes/userRoute');
const app = express();

app.use("/users", userRouter);


app.listen(3000, () => {
    console.log("Server run success");
})