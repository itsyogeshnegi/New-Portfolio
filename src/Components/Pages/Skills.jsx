import React from 'react'
import MySkills from '../Common/MySkills'

const Skills = () => {
    return (
        <div className='h-screen w-full bg-slate-900 text-white'>
            <div className='flex justify-center items-center w-full py-5'>
                <b className='text-5xl'>Skills</b>
            </div>
            <div className='w-full h-auto'>
                <div className='py-10'>
                <MySkills rtl={false} />
                </div>
                <div  className='py-10'>
                <MySkills rtl={true} />
                </div>
                <div  className='py-10'>
                <MySkills rtl={false} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
