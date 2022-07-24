// //import Navbar from "./src/components/Navbar.js";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="h-full w-screen">
      <div className="h-full w-screen relative">
        <div className="absolute w-full h-full grid place-items-center">
          <h1 className="mx-auto p-20 text-white rounded text-4xl bg-gradient-to-r from-cyan-500 to-white-500 border">Welcome to Easy Learning</h1>
        </div>
        <img src="/cover.jpg" className="h-full w-screen object-fill" />
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
