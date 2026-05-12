import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 border-b-2 border-gray-400'>
      <h1 className='text-white text-xl font-bold'>Hi. <br /> <span className='text-3xl font-bold text-emerald-400'>Welcome.</span></h1>
      <button className='bg-red-600 text-white px-4 py-2 rounded-md'    >Log out</button>
    </div>
  )
}

export default Header
