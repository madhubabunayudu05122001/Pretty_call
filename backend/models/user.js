const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const jwt =require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},"secret123",{expiresIn:"7d"})
    return token;
}
const User= mongoose.model("user",userSchema);
const validate = (data)=>{
    const Schema = Joi.object({
        fullName:Joi.string().required().label("FullName"),
    email:Joi.string().email().required().label("Email"),
    password:passwordComplexity().required().label("password"),
    
    })
    return Schema.validate(data);

}
module.exports={User,validate};



