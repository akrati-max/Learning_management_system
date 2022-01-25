const jwt = require('jsonwebtoken');
const User = require("../Models/userModel")


const authenticate =async (req,res,next)=>{
  try{
      const token = req.cookies.jsonWebToken;
      const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
      const verifiedUser = await User.findOne(
      {_id: verifyToken._id,
      "tokens.token":token}
      );
      console.log("First",req.user);
      if(!verifiedUser)
      {
          throw new Error("User not found");
      }

      req.token = token;
      req.userId= verifiedUser._id;
      req.user = verifiedUser;

      next();
    }
    catch(err)
    {
        res.status(401).send("Unauthorized access");
        console.log(err);
    }
};
//     const token = req.cookies.jsonWebToken;
//     console.log("GOT",token);
//     next();
// }

module.exports = authenticate;