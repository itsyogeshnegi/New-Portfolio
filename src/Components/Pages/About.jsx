import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full bg-black text-white flex'>
      <div className='h-full w-1/2 flex flex-col justify-center items-start px-12 gap-5'>
      <b className='underline flex text-justify text-4xl'>About</b>
      <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laboriosam quo eligendi vitae obcaecati quas! Reprehenderit nisi corrupti rerum quas dolorum assumenda. Dolorem quas iure eius voluptate numquam quibusdam facere voluptatum officia quaerat, eveniet, aspernatur in laudantium culpa maxime iusto! Amet, illo numquam dignissimos consequatur dolorum aliquid nam itaque error, iusto eveniet repellendus modi. Cumque delectus excepturi impedit reprehenderit labore sint. Magni autem deleniti fugiat quaerat, amet vel ut. Fugit?</p>
      <b>New Delhi, India...</b>
      </div>
      <div className='h-full w-1/2 flex justify-center items-center'>
      <div className='h-1/2 p-2 rounded-full flex justify-center items-center border-2 border-white'>
        <img src='/test.jpg' className=' h-full rounded-full'/>
      </div>
      </div>
    </div>
  )
}

export default About
