import { useEffect, useState } from "react";
//import { Outlet } from "react-router-dom";

function Learn() {
  const [user, setUser] = useState("Loading..");

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
    <div className="Learn grid place-content-center w-full h-full">
      {user === "Loading" ? <h1>Loading</h1> : <h1>{user.name}</h1>}
      <div className="flex flex-wrap w-full space-x-10 h-full justify-around">
        <div className="card p-10 shadow">
          <img
            src="/web.png"
            width={250}
            className="rounded-lg shadow"
          />
          <h1 className="font-bold my-5 text-lg">Web development</h1>
          <p>Lorem </p>
        </div>
        <div className="card p-10 shadow">
          <img
            src="/ml.jpg"
            width={250}
            className="rounded-lg shadow"
          />
          <h1 className="font-bold my-5 text-lg">Machine Learning</h1>
          <p>Machine Learning </p>
        </div>
        <div className="card p-10 shadow">
          <img
            src="/android.png"
            width={250}
            className="rounded-lg shadow"
          />
          <h1 className="font-bold my-5 text-lg">Android Development</h1>
          <p>Android Laerning </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Learn;
