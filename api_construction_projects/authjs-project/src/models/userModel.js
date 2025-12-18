
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minLength:5,
        lowerCase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        select:false,
    },
    verfied:{
        type:Boolean,
        default:false,
    },
    verificationToken:{
        type:String,
        select:false,
    }, verificationTokenValidation:{
        type:String,
        select:false,
    }, forgotPasswordToken:{
        type:String,
        select:false,
    }, forgotPasswordTokenValidation:{
        type:String,
        select:false,
    }
},{
    timestamps:true
})


module.exports = mongoose.model("User",userSchema);

