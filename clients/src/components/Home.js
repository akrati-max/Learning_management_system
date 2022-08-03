// //import Navbar from "./src/components/Navbar.js";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-full grid place-items-center">
      <div
        className="mx-auto p-20 rounded-xl text-4xl
           bg-blue-500/60 to-white-500 shadow-lg"
      >
        <h1 className="text-white">Welcome to Easy Learning</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
