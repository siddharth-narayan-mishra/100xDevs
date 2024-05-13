const mongo = require("mongoose");
mongo.connect("mongodb+srv://siddharthnmishra7:PjaZeCiakG7W8EoU@siddb.r9sv89i.mongodb.net/100xDevs")

const AdminSchema = new mongo.Schema({
    username: String,
    password: String
})

const UserSchema = new mongo.Schema({
    username: String,
    password: String,
    purchasedCourses: [
        {
            type: mongo.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
})

const CourseSchema = new mongo.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
})

const Admin = mongo.model("Admin",AdminSchema)
const User= mongo.model("User",UserSchema)
const Course = mongo.model("Course",CourseSchema)

module.exports={Admin,User,Course}