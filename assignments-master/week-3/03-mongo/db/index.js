const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://siddharthnmishra7:PjaZeCiakG7W8EoU@siddb.r9sv89i.mongodb.net/100xDevs');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}