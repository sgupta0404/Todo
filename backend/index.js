const express=require("express");
const {createTodo, updateTodo} =require("./types");
const { todo } = require("./db");
const cors=require("cors");
const app=express();


app.use(express.json());
app.use(cors());

//body {
// title:string
// description:string 
// }
app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const ParsedPaylaod= createTodo.safeParse(createPayload);
    if(!ParsedPaylaod.success){
        res.status(411).json({msg: "You sent the wrong inputs"});
    return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({msg:"Todo created"})
})

app.get("/todo",async function(req,res){
    const todos=await todo.find({});
    res.json({todos})
}) 

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const ParsedPaylaod= updateTodo.safeParse(updatePayload);
    if(!ParsedPaylaod.success){
        res.status(411).json({msg: "You sent the wrong inputs"});
    return;
    }

    await todo.update({
        _id: req.body.id},{completed: true
    })
    
    res.json({msg:"Todo marked as completed"})
})

app.listen(3000);




//write basic boilerplater exprss code
//with express.json middleware
