//import res from "express/lib/response";
//import { handle } from "express/lib/application";
import { useState } from "react";
import { useLogin } from "../context/LoginContext";

function SignIn() {
    const[user, setUser] = useState({
        email:" ",
        password:"",
    });
    const {handleLogin} =useLogin();

   let fieldName,value;
   const handleInputChange =(e)=>{
    console.log(e.target.name);
    fieldName = e.target.name;
    value = e.target.value;
    setUser({...user,[fieldName]:value});

   };

   const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("In handlesubmit"); 
   await handleLogin(user);
   };





    return (
      <div className="SignIn container-fluid">
        <h1>SignIn</h1>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Enter password"
                    name="password"
                     value={user.password}
                     onChange={handleInputChange}
                     />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            
        
    

      </div>
    );
  }
  
  export default SignIn ;