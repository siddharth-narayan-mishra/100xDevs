const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongo = require("mongoose");
const port = 3000;

app.use(express.json())
mongo.connect("mongodb+srv://siddharthnmishra7:PjaZeCiakG7W8EoU@siddb.r9sv89i.mongodb.net/100xDevs")

mongo.



app.listen(port)