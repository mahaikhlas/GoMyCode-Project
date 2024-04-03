const express = require ("express");
const route = express.Router();
const student = require ("../Models/Students");

// get all students 


route.get ('/students',async (req,res)=>{
    try {
        const getStudents = await student.find()
        res.json(getStudents)
    }catch(error){
        res.status(500).json({message:error.message})
    }
});


route.post ('/newstudent', async (req,res)=>{
    const {name,email,password} =req.body;
    try {
        const newStudent = new student({name,email,password})
        const saveStudent = await newStudent.save()
        res.json(saveStudent)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


module.exports = route;