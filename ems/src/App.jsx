import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Employeedashboard from "./components/Auth/Dashboard/Employeedashboard";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import { setLocalstorage } from "./utils/Localstorage";

const App = () => {
  //   useEffect(()=>{
  // setLocalstorage()

  //   },[])

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard/> : <Employeedashboard/> }

    </>
  );
};

export default App;
