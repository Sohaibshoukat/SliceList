import React, { useEffect, useRef, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6"
import BgBall from "../../assets/Images/image.png"
import BannerImage from "../../assets/Images/Banner.png"
import BannerBall from "../../assets/Images/BGBall.png"

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const whyUsRef = useRef(null);
  
    const handleScroll = () => {
      const top = whyUsRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight;
      if(isVisible){
        setIsVisible(isVisible);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
            <div className='py-16 md:py-20 lg:py-36 xl:h-[80vh] relative'>
                <img src={BgBall} alt="" className='absolute -z-10 -bottom-[50%] -left-[10%] w-[250px] md:w-[300px] lg:w-auto' />
                <img src={BgBall} alt="" className='rotate-180 absolute -z-10 -top-[60%] -right-[10%] w-[250px]  md:w-[300px] lg:w-auto' />
                <div className="flex flex-col justify-center items-center w-[95%] md:w-[90%] xl:w-[80%] m-auto text-center h-[100%] FadeIn">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-Heading leading-[2rem] md:leading-[4rem] mb-6 xl:mb-8'>Grow Your Email Marketing Performance <br /> with  Laser-Targeted Insights</h1>
                    <p className='text-lg md:text-xl xl:text-2xl font-light md:max-w-[80%] xl:max-w-[60%] font-Para mb-10 lg:mb-16'>Generate Questionnaires, and more by enhancing your marketing emails with compelling customization.</p>
                    <div className='flex flex-row justify-center gap-2 md:gap-8 text-base md:text-xl font-Para'>
                        <button className='bg-black text-white font-Para px-2 py-2 md:px-6 rounded-xl hover:bg-accence hover:text-black duration-300 ease-in-out'>Start Your Free Trial</button>
                        <button
                            className='bg-transparent border-black border-2 px-2 py-2 md:px-6 flex items-center gap-1 md:gap-2 font-Para rounded-xl hover:bg-black hover:text-white duration-300 ease-in-out'
                        >
                            <FaCirclePlay className='bg-accence rounded-full hover:bg-black' />
                            Watch a Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[98%] md:w-[90%] xl:w-[80%] m-auto relative overflow-hidden">
                <div ref={whyUsRef} className={`flex justify-center items-center my-4 md:my-8 relative ${isVisible && 'FadeIn'} `}>
                    <img src={BannerImage} alt="" />
                    <img src={BannerBall} alt="" className='absolute bottom-[-75%] md:bottom-[-70%] -z-10' />
                    <div className='absolute top-[30%] left-[2%] xl:left-[5%] rotate-12'>
                        <h2 className='bg-black text-secondary text-sm md:text-xl font-light py-1 px-1 md:px-2 rounded-lg hover:bg-accence hover:text-black duration-300 ease-in-out floatanimation AfterSection z-50 relative'>+60% Placed Order Rate</h2>
                    </div>
                    <div className='absolute top-[30%] right-[2%] xl:right-[5%] -rotate-12'>
                        <h2 className='bg-black text-secondary text-sm md:text-xl font-light py-1 px-1 md:px-2 rounded-lg hover:bg-accence hover:text-black duration-300 ease-in-out floatanimation2 AfterSection'>+20% Open Rate</h2>
                    </div>
                    <div className='absolute bottom-[30%] right-[2%] xl:right-[5%] rotate-12'>
                        <h2 className='bg-black text-secondary text-sm md:text-xl font-light py-1 px-1 md:px-2 rounded-lg hover:bg-accence hover:text-black duration-300 ease-in-out floatanimation AfterSection'>+15% Click Rate</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner