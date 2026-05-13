import React from 'react'

const Createtask = () => {
  return (
    <div>
        {/* Form Section */}
  <div className="flex items-center justify-center p-10">
    
    <div className="w-full  bg-[#111111] border border-gray-800 rounded-2xl shadow-2xl p-8">
      
      <form className="flex flex-col gap-5">
        
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Task Title
          </h3>

          <input
            type="text"
            placeholder="Make a UI design"
            className="w-full bg-[#1a1a1a] border border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Task Description
          </h3>

          <textarea
            cols="30"
            rows="5"
            placeholder="Enter task description"
            className="w-full bg-[#1a1a1a] border border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
          ></textarea>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Date
          </h3>

          <input
            type="date"
            className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Assign to
          </h3>

          <input
            type="text"
            placeholder="Employee name"
            className="w-full bg-[#1a1a1a] border border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Category
          </h3>

          <input
            type="text"
            placeholder="Design"
            className="w-full bg-[#1a1a1a] border border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <button
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-black font-bold py-3 rounded-lg shadow-lg mt-2"
        >
          Create Task
        </button>

      </form>
    </div>
  </div>
    </div>
  )
}

export default Createtask
