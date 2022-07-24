
import Navbar from "./components/Navbar";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
    <div className="App h-screen w-screen">
       <Navbar />
       <Outlet />
    </div>
    </LoginProvider>
  );
}

export default App;
