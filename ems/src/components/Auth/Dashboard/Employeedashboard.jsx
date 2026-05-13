import React from 'react'
import Header from '../Others/header'
import TaskListNumbers from '../Others/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const Employeedashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskListNumbers/>    
      <Tasklist />    
    </div>
  )
}

export default Employeedashboard
