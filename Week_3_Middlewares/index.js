const express = require("express")
const app = express();
const zod = require("zod")
const port = 3000;
const jwt = require("jsonwebtoken")
const jwtPassword = "12345";

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://siddharthnmishra7:PjaZeCiakG7W8EoU@siddb.r9sv89i.mongodb.net/")

// const schema = zod.object(zod.string());

app.use(express.json())

const User = mongoose.model("Users",{name: String, email: String, password: String})

// function checkExistence(username,password){
//     for (let i = 0; i < ALL_USERS.length; i++) {
//         let email= ALL_USERS[i].email;
//         let pass = ALL_USERS[i];
        
//         if(username==email&&password==pass){
//             return true;
//         }
//     }
//     return false;
// }

app.post("/signup", async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email:email})

    if(existingUser){
        return res.status(400).send("Username is taken!")
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    })
    
    user.save()

    res.status(400).send("User created succesfully!")

})

// if (!checkExistence(username,password)) {
//     const token = jwt.sign({username: username,password:password},jwtPassword)
//     return res.status(400).json({token});
// }

// app.get("/signin",(req,res)=>{
//     const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token,jwtPassword)
//         res.send(decoded.username)
//     }catch{
//         res.send("invalid request")
//     }
// })

// function userAuth(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username=="sid"&&password=="admin") {
//         next();
//     }else{
//         res.status(200).json({msg:"You ain't sid!"})
//     }
// }

// function batCheck(req,res,next){
//     const message = req.query.m;
//     if (message=="batman") {
//         next();
//         return;
//     }else{
//         res.status(200).json({"msg":"sid ain't batman?"})
//     }
// }

// app.get("/signup", userAuth,batCheck, (req,res)=>{
//     res.status(400).json({"msg":"Hello sid who is also batman"})
// })


// app.post("/signup",function(req,res){
//     const robins = schema.safeParse(req.body.robins);    
//     const noOfRobins = robins.length;
//     res.send(robins)
// })


app.listen(port);