const express = require('express')
const app = express()
const mongoose = require ('mongoose');
const cors = require ("cors");




const studentSchema = require("./Controllers/studentController");


app.use (express.json());
app.use (cors({
    origin :'http://localhost:5173',
    credentials :true
}));

//routes

app.get( '/',(req, res) => {
    res.send('Hello NODE API')
})

app.listen(3000, ()=> {
    console.log( `App is running on port 3000`)
})


mongoose.connect('mongodb+srv://mahaikhlasnajjati:Maha123ok@maha.xijlnou.mongodb.net/?retryWrites=true&w=majority&appName=maha')
.then (()=>{
    console.log('connected to mongoDB')
}).catch ((error)=>{
    console.log(error)
})

app.use('/',studentSchema)