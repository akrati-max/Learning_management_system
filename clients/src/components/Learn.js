import { useEffect, useState } from "react";
//import { Outlet } from "react-router-dom";

function Learn() {
  const [user, setUser] = useState("Loading..")

const getSecretData = async ()=>{
    const res =  await fetch('/learn',{
        method:'GET',
        headers:{
            'Content-Type':"application/json",
            Accept:"application/json"
        },
        credentials:"include"
    });
    const json =await res.json();
    setUser(json);
};

useEffect( ()=>{
 getSecretData();
},[]);

    return (
      <div className="Learn">
        {user ==="Loading" ? <h1>Loading</h1> : <h1>{user.name}</h1>}
      </div>
    );
  }
  
  export default Learn;
  