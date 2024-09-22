import React from 'react';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Slider = () => {
  return (
    <div
      className="h-[95vh] w-full flex text-white justify-center items-center flex-col p-8 space-y-8"
      style={{
        backgroundImage: `url('/slider.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(85%)', // Makes text more readable over image
      }}
    >
      {/* <div className="h-full w-1/2 flex justify-center items-center flex-col p-8 space-y-8"> */}
        <p className="text-center text-7xl">
          <span className="font-light">YOGESH</span> <br />
          <span className="font-extrabold text-7xl tracking-wide">NEGI</span> <br />
          <span className="font-light text-4xl">Software Developer</span>
        </p>
        <div className="flex justify-around items-start">
          <button className="border-2 flex justify-between items-center text-xl px-4 py-2 border-white rounded-full h-14 w-80 transition-all hover:bg-white hover:text-black">
            <span>Download CV</span>
            <LiaFileDownloadSolid size={24} />
          </button>
        </div>
        <svg class="animate-bounce w-6 h-6">
        <FaAngleDoubleDown className='cursor-pointer'/>
        </svg>
    </div>
  );
};

export default Slider;
