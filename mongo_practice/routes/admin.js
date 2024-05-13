const express = require("express")
const router = express.Router()
const {Admin, Course} = require("../db/index")


router.post("/signup",async function(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({username})
    .then((user)=>{
        if(user){
            res.status(403).json({"error":`User already exists`})
        }else{
            Admin.create({username,password})
            .then(res.status(200).json({"msg":"User created successfully."}))
        }
    })
})

router.post("/courses",function(req,res){
    const id = req.body.id;
    const title = req.body.password;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const published = req.body.published;

    Course.findOne({id})
    .then((user)=>{
        if(user){
            res.status(403).json({"error":`course already exists`})
        }else{
            Course.create({id,title,description,price,imageLink,published})
            .then(res.status(200).json({"msg":"course created successfully."}))
        }
    })
})

router.get("/",async function(req,res){
    Admin.find({}).then((allAdmins)=>{
        res.status(200).json(allAdmins)
    })
    .catch(()=>{
        console.log("Error fetching admins.")
    })
})

router.get("/courses",async function(req,res){
    Course.find({}).then((allCourses)=>{
        res.status(200).json(allCourses)
    })
    .catch(()=>{
        console.log("Error fetching courses.")
    })
}
)

module.exports = router