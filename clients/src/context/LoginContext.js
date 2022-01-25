const { createContext, useContext, useState } = require("react");
const { useNavigate } = require("react-router-dom")


export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [login,setLogin] = useState(false);
    const navigate = useNavigate();
   
    const handleLogout = async () => {
        try{
        const res = await fetch("/logout", {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
    });
    const json =await res.json();
    setLogin(false);
    navigate("/SignIn");
    window.alert("User Logged Out successfully");
    console.log(json);
}
catch(err)
{
    window.alert("OOps!! some error occurred");
}
    };


   const handleLogin = async(user) =>{ 
   const {email, password } = user;
   const res = await fetch("/login", {
       method:"POST",
       headers:{
           "Content-Type":"application/json",
       },
       body: JSON.stringify({email, password}),
    });


const json =await res.json();

if(res.status === 200)
{
    window.alert("User login successfully");
    setLogin(true);
    navigate("/learn");
}
else{
    window.alert("Invalid credentials");
}
};
    return(
        <LoginContext.Provider value={{login, handleLogout,handleLogin}}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin =() =>{
    return useContext(LoginContext)
};