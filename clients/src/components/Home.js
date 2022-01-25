// //import Navbar from "./src/components/Navbar.js";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>home</h1>
      <Outlet />
    </div>
  );
}

export default Home;
