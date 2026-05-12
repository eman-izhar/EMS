import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();     // Handle login logic here

    console.log("email is", email);
    console.log("password is", password);
    
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            handleSubmit(e); // two way binding for form submission
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent text-xl border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400 "
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" mt-3 text-white outline-none bg-transparent text-xl border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400 "
            type="password"
            placeholder="Enter Password"
          />

          <button className="mt-5 bg-emerald-600 text-white outline-none text-xl border-none rounded-full py-3 px-15">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
