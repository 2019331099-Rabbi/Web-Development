require("dotenv").config();
const express = require('express');
const userRouter = require("./routes/userRoute");
const app = express();

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server run success");
});