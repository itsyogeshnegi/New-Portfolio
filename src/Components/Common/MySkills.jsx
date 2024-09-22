import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MySkills = ({ rtl }) => {  // Pass 'rtl' to control direction
    let settings = {
        dots: false, // Remove dots to avoid pauses
        infinite: true,
        speed: 2000, // Transition speed
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Continuous movement without pause
        cssEase: 'linear', // Ensure smooth, non-stop transition
        arrows: false,
        rtl: rtl, // Use rtl property for alternating direction
        pauseOnHover: false  // Continuous running
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img className='h-20' src="skills/html.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/css-3.png" alt="CSS" />
                </div>
                <div>
                    <img className='h-20' src="skills/js.png" alt="JavaScript" />
                </div>
                <div>
                    <img className='h-20' src="skills/react.png" alt="React" />
                </div>
                <div>
                    <img className='h-20' src="skills/github.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/next.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/express.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/node.png" alt="node" />
                </div>
                <div>
                    <img className='h-20' src="skills/redux.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/tree.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/tailwind.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/vercel.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/mongoDb.png" alt="HTML" />
                </div>
                <div>
                    <img className='h-20' src="skills/Jenkins.png" alt="HTML" />
                </div>
            </Slider>
        </div>
    );
}

export default MySkills;
