const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

app.use(express.json())
app.use("/admin",adminRouter)
app.use("/user",userRouter)

app.listen(port)