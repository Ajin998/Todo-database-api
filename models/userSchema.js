const mongoose = require('mongoose');

const uniqid = require('uniqid');
const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        default: 'user'+uniqid();
    }
    email:{
        type:String,
        required: [true,"Email is required for registration"],

    }
    password: {
        type: String,
        required: [true,"Password is required for registration"],
    },
    // created_at: {
    //     type:Date,

    // }
},{timestamps:true,});

const User=  mongoose.model("User",userSchema);
module.exports = User;