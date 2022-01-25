
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="Features">
      <h1>Features</h1>
      <Outlet />
    </div>
  );
}

export default Home;