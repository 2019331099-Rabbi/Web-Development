const express = require('express');
const userRouter = require('./routes/userRoute');
const publicRouter = require('./routes/publicRouter');
const app = express();

app.use("/users", userRouter);
app.use("/", publicRouter);

app.listen(3000, () => {
    console.log("server run success");
})