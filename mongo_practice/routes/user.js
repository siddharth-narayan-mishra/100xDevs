const express = require("express")
const router = express.Router()
const {User,Course} = require("../db/index")


router.post("/signup",async function(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username})
    .then((user)=>{
        if(user){
            res.status(403).json({"error":`User already exists`})
        }else{
            User.create({username,password})
            .then(res.status(200).json({"msg":"User created successfully."}))
        }
    })
})

router.get("/",async function(req,res){
    User.find({}).then((allUsers)=>{
        res.status(200).json(allUsers)
    })
    .catch(()=>{
        console.log("Error fetching Users.")
    })
}
)

router.get("/courses",async function(req,res){
    Course.find({}).then((allCourses)=>{
        res.status(200).json(allCourses)
    })
    .catch(()=>{
        console.log("Error fetching courses.")
    })
}
)

router.post("/courses/:courseId",async function(req,res) {
    const courseId = req.params.courseId;
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username,password})
    const course = await Course.findOne({id:courseId})

    if (user) {
        if(course){
            await User.updateOne({username,password},{
                "$push":{
                    purchasedCourses:  course._id
                }
            })
        }else{
            res.json({"msg":"Course not found"})
        }
    }else{
        res.status(403).json({"msg":"Username or password is incorrect."})
    }
})

module.exports = router
