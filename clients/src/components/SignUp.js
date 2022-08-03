import { useState } from "react";
//import SignIn from "./components/SignIn";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  let fieldName, value;
  const handleInputChange = (e) => {
    console.log(e.target.name);
    fieldName = e.target.name;
    value = e.target.value;
    setUser({ ...user, [fieldName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = user;
    // console.log("***");
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, phone, password }),
    });
    const json = await res.json();

    if (res.status === 200) {
      window.alert("User created successfully");
    } else {
      window.alert("OOps!! some error occured");
    }
  };

  return (
    <div className="SignUp h-full grid place-items-center">
      <div className="max-w-2xl w-full bg-slate-200 rounded-lg px-5 py-5 mx-auto space-y-5">
        <h1 className="mt-3 text-3xl">Sign Up</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter phone"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block bg-blue-500"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
