// mongoose schema
const mongoose = require('mongoose');
const taskSchema= new mongoose.Schema({
    taskName:{
        type: String,
        required: [true, "Please Enter Task Name"]
    },
    status: {
        type: String,
        enum: ["Pending","Completed"],
        default: "Pending"
    },
    sharedWith:{
        type: String,
        
    }
});

const Task = mongoose.model('Task',taskSchema);

module.exports =Task;