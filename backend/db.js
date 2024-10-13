//To create schema for our projects

/*
Todo{
title:string
description:string
completed:boolean
} 
*/

const mongoose=require("mongoose");
//mongoose url
//mongodb+srv://sanchit05693:YVhfwegNEfuvMGgU@cluster0.tymcv.mongodb.net/
//.env
mongoose.connect("mongodb+srv://sanchit05693:YVhfwegNEfuvMGgU@cluster0.tymcv.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }

}) 

const todo=mongoose.model('todos',todoSchema); 

module.exports={todo:todo}