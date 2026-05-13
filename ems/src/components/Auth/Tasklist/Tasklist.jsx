import React from "react";

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5 overflow-x-auto"
    >
      <div className="h-full w-75 bg-blue-500 rounded-xl shrink-0 p-5">
        <div className="flex justify-between text-white items-center">
          <h3 className=" bg-red-400 rounded  px-3 py-1 text-sm">High</h3>
          <h4 className="">13 May 2026</h4>
        </div>
          <h2 className="text-white text-lg font-bold mt-5">Make a yt video</h2>
          <p className="text-white text-sm mt-1">Description of the task goes here.</p>
      </div>
      <div className="h-full w-75 bg-emerald-500 rounded-xl shrink-0 p-5">
        <div className="flex justify-between text-white items-center">
          <h3 className=" bg-red-400 rounded  px-3 py-1 text-sm">High</h3>
          <h4 className="">13 May 2026</h4>
        </div>
          <h2 className="text-white text-lg font-bold mt-5">Make a yt video</h2>
          <p className="text-white text-sm mt-1">Description of the task goes here.</p>
      </div>
      <div className="h-full w-75 bg-sky-500 rounded-xl shrink-0 p-5">
        <div className="flex justify-between text-white items-center">
          <h3 className=" bg-red-400 rounded  px-3 py-1 text-sm">High</h3>
          <h4 className="">13 May 2026</h4>
        </div>
          <h2 className="text-white text-lg font-bold mt-5">Make a yt video</h2>
          <p className="text-white text-sm mt-1">Description of the task goes here.</p>
      </div>
      <div className="h-full w-75 bg-purple-500 rounded-xl shrink-0 p-5">
        <div className="flex justify-between text-white items-center">
          <h3 className=" bg-red-400 rounded  px-3 py-1 text-sm">High</h3>
          <h4 className="">13 May 2026</h4>
        </div>
          <h2 className="text-white text-lg font-bold mt-5">Make a yt video</h2>
          <p className="text-white text-sm mt-1">Description of the task goes here.</p>
      </div>
    
    </div>
  );
};

export default Tasklist;
