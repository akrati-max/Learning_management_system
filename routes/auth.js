const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../Models/userModel')
const authenticate =require ('../middleware/authenticate')


router.get('/', (req, res) => {
  console.log("Hello, I am /");
  res.send("I am at auth.js");
})

router.post('/register',async (req, res) => {
      const {name, email,phone,password} = req.body;

      if (email && name && phone && password) 
      {
           const newUser = new User({name, email,phone,password})
           const userExist = await User.findOne({email})
          
           if (userExist)
              {
                 return res.status(400).json({error: "User already registered"})
              }

           console.log("hello the User exists", userExist)
            const userRegistered = newUser.save()

           if(userRegistered)
              {
                return res.json({success:"User is registered successfully"})
              }
           else 
              {
                return res.status(500).json({error: "oops ! some error ocurred while trying to register"})
              }
      }
      else {
              res.status(406).json({ error: "Please fill all the required fields"})
            }
            
  })



  router.post('/login',async (req, res) => {
    const {email,password} = req.body;
     // console.log("auth")
      if (email && password) 
      {
           
           const userFound = await User.findOne({email: email})
          
           if (userFound)
              {
                const passwordMatch = await bcrypt.compare(password,userFound.password)

                const token = await userFound.generateAuthToken();
                res.cookie('jsonWebToken',token,{
                  expires:new Date(Date.now()+86400000),
                  httpOnly:true,
                })
                console.log("got token");
                if(passwordMatch){
                  return res.json({message: "login successfull"})
                }
                else{
                  return res.status(401).json({error: "Login failed. Incorrect credentials"})
                }
                 
              }
             
           
           else 
              {
                return res.status(401).json({error: "Login failed. Incorrect credentials"})
              }
      }
      else {
              res.status(406).json({ error: "Please fill all the required fields"})
            }
            
  })


  router.get("/learn",authenticate,(req, res)=>{
console.log("After",req.user);

    res.send(req.user);
  });

  router.get("/logout",(req, res) => {
    res.clearCookie('jsonWebToken');
    
        res.send({success: true , message:"User logged out successfully"});
      });

      module.exports = router
