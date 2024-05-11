const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs")
app.use(express.static("public"))

function newTask(req,res,next){
    let newTask = prompt("Enter new task:");
}

const tasks = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Get eggs, milk, bread, and vegetables from the supermarket',
      dueDate: '2024-05-10',
      priority: 'high',
      completed: false
    },
    {
      id: 2,
      title: 'Clean the house',
      description: 'Vacuum the floors, dust the furniture, and clean the bathrooms',
      dueDate: '2024-05-12',
      priority: 'medium',
      completed: false
    },
    {
      id: 3,
      title: 'Finish project report',
      description: 'Write the conclusion section and proofread the report',
      dueDate: '2024-05-15',
      priority: 'high',
      completed: false
    },
    {
      id: 4,
      title: 'Pay utility bills',
      priority: 'medium',
      completed: true
    },
    {
      id: 5,
      title: 'Call mom',
      completed: false
    },
    {
      id: 6,
      title: 'Attend team meeting',
      description: 'Prepare agenda and presentation slides',
      dueDate: '2024-05-08',
      priority: 'high',
      completed: true
    }
  ];

app.get("/", (req,res)=>{
    res.render("index", {tasks:tasks})
})

app.post("/",(req,res)=>{
    res.send("New task created!")
})

app.get("/newTask",(req,res)=>{
    res.render("newTask")
})
app.put("/",(req,res)=>{
    res.send("Edit task")
})
app.delete("/",(req,res)=>{
    res.send("Delete task")
})

app.listen(port)