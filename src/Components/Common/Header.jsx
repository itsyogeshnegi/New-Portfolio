import React from 'react'

const Header = () => {
  return (
    <div className='h-14 w-full bg-slate-950 shadow-lg text-white flex justify-between text-center items-center px-3 top-0 sticky'>
      <b className='text-2xl'>Portfolio</b>
      <ul className='flex gap-3 font-semibold text-sm '>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONNECT</li>
      </ul>
    </div>
  )
}

export default Header
