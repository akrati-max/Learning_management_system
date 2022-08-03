import Navbar from "./components/Navbar";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <div className="App h-screen w-screen relative">
        <img
          src="/cover.jpg"
          className="top-0 fixed h-full w-screen object-cover -z-10"
        />
        <Navbar />
        <Outlet />
      </div>
    </LoginProvider>
  );
}

export default App;
