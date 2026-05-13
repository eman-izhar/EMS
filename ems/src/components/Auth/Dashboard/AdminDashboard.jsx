import React from "react";
import Header from "../Others/header";
import Createtask from "../Others/Createtask";
import AllTasks from "../Others/AllTasks";
const AdminDashboard = () => {
  return (
<div className="w-full min-h-screen bg-black text-white">
  
  {/* Header Component */}
  <Header />
  <Createtask/>
  <AllTasks/>


</div>
  );
};

export default AdminDashboard;
