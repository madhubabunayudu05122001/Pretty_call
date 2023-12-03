const router = require ('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user.js');
const Joi = require('joi');

router.post("/",async(req,res)=>{
    try{
        const validate = (data)=>{
            const schema = Joi.object({
                email:Joi.string().email().required().label("Emai"),
                password:Joi.string().required().label("Password")
            })
            return schema.validate(data);
        }
        const {error}= validate(req.body);
        if(error)return res.status(400).send({message:"validate Error!!"})
        const user = await User.findOne({email:req.body.email});
        if(!user)return res.status(410).send({message:"invalid Email or password"})
        const valid = await bcrypt.compare(req.body.password,user.password);
        if (!valid)return res.status(410).send({message:"invalid Email or password!!"})
        const token = user.generateAuthToken();
        res.status(200).send ({message:"Login Successfull",token});
    }catch(error){
        console.log("TYPE6 LOGIN ERROR:-",error);
        res.status(500).send({message:"login server error"});
    }
} );
module.exports=router;