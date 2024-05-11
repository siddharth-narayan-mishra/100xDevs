const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs")

const userRouter = require('./routes/users')
app.use("/users", userRouter);

app.get('/', function(req, res){
    // res.send("Hello, world!");
    // res.status(200).send('Hi');
    // res.json({message:"error"})
    // res.download("index.js");
    res.render("index" ,{text: "Hello, world!"})
})

app.listen(port);