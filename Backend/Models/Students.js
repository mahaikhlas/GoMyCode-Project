const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema ({
    name : { type : String, require : true },
    email : { type : String , require : true, lowercase : true },
    password : { type : String, require : true }


});

const Student = mongoose.model ("students",studentSchema);
module.exports = Student;