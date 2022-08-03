import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { Outlet } from "react-router-dom";

function Learn() {
  const [user, setUser] = useState();

  const getSecretData = async () => {
    const res = await fetch("/learn", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    });
    const json = await res.json();
    setUser(json);
  };

  useEffect(() => {
    getSecretData();
  }, []);

  return (
    <div className="w-full h-full">
      {!user ? (
        <div className="w-full h-full grid place-items-center">
          <div
            className="flex flex-col items-center justify-center 
        bg-slate-100 px-10  py-5 rounded-xl"
          >
            <h1 className="my-5 text-3xl">Signin see the content</h1>
            <Link className="nav-link" to="/SignIn">
              <button className="btn btn-primary btn-block bg-blue-500">
                Signin
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto my-24">
          <div className="flex bg-slate-100 rounded-lg p-3 m-4 shadow">
            <img src="/web.png" width={250} className="rounded-lg shadow" />
            <div className="px-10">
              <h1 className="font-bold my-3 text-lg">Web development</h1>
              <p>Lorem </p>
            </div>
          </div>
          <div className="flex bg-slate-100 rounded-lg p-3 m-4 shadow">
            <img src="/ml.jpg" width={250} className="rounded-lg shadow" />
            <div className="px-10">
              <h1 className="font-bold my-3 text-lg">Machine Learning</h1>
              <p>Machine Learning </p>
            </div>
          </div>
          <div className="flex bg-slate-100 rounded-lg p-3 m-4 shadow">
            <img src="/android.png" width={250} className="rounded-lg shadow" />
            <div className="px-10">
              <h1 className="font-bold my-3 text-lg">Android Development</h1>
              <p>Android Laerning </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Learn;
