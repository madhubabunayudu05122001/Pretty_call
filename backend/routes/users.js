const routes = require('express').Router();
const bcryprt = require('bcrypt');

const{User, validate} = require('../models/user.js');
routes.post('/', async(req,res) =>{
    try{
        const {error}= validate(req.body);
        if(error) return res.status(400).send({
            message:"Validation Error!!"
        });
        const user = await User.findOne({email:req.body.email});

        if(user) return res.status(401).send({message:"email Already Exist!!"});

        const salt = await bcryprt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        await User({...req.body, password:hashedPassword}).save();
        return res.status(200).send ({message:"SignUp Successfully!!!"})
    }
    catch(error){
        console.log("DEV SIGNUP ERROR:-", error);
        res.status(500).send({message:"error server not working"})
    }
});
module.exports=routes;
