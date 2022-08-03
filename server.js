const express = require("express");
const dotenv = require("dotenv");
const app = express();
var cookieParser = require("cookie-parser");

const auth = require("./routes/auth.js");
dotenv.config({ path: "./config.env" });

app.use(cookieParser());
app.use(express.json());
require("./db/conn");
app.use(auth);

//if(process.env.NODE_ENV === "production") {
app.use(express.static("clients/build"));
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "clients", "build", "index.html"));
});
//}

// //  const loggedIn = true
// // const wallet =true;

// // const middleware=(req,res,next)=>{
// //     console.log("checking if user is logged in")
// //     if(loggedIn){
// //         next();
// //     }
// //     else{
// //             res.send("user is not logegd in")
// //         }

// // }
// // const middleware2=(req,res,next)=>{
// //     console.log("checking if users wallet have smthng")
// //     if(wallet)
// //     {
// //         next();
// //     }
// //     else
// //     {
// //         res.send("Wallet is empty")
// //     }
// // }

// console.log("Hello Server")

// app.get('/',(req,res)=>{
//     console.log("hey i am at /")
//     res.send("Hello i am at /")
// })

// app.get('/register',(req,res)=>{
//     console.log("hey i am at register")
//     res.send("register page ")
// })

// app.get('/learn',middleware,middleware2,(req,res)=>{
//     console.log("hey i am at Learning")
//     res.send("Learning Page")
// })

// app.get('/Contact',(req,res)=>{
//     console.log("hey i am at Contact")
//     res.send("Contact Page")
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
