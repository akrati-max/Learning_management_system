const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const userModel=mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email :{
        type:String,
        required: true
    },
    password :{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    tokens : [
        {
            token :{
                type: String,
                required: true,
            },
        },
    ],
});
userModel.pre("save",async function(next){
    if(this.isModified('password')){
    this.password= await bcrypt.hash(this.password,10);
    }
    next();
})

userModel.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id: this._id},process.env.SECRET_KEY);
    this.tokens = this.tokens.concat ({
        token: token
    });
    await this.save();
    return token;
};

const User=mongoose.model('USER',userModel);
module.exports=User;