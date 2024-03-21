import React, { useEffect, useRef, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6"
import BgBall from "../../assets/Images/image.png"
import BannerImage from "../../assets/Images/Banner.png"
import BannerBall from "../../assets/Images/BGBall.png"
import Bannerbg from '../../assets/Images/Banner/BG.png'
import Bannermobile from '../../assets/Images/Banner/Mobile.png'
import m1red from '../../assets/Images/Banner/m1.png'
import m2blue from '../../assets/Images/Banner/m2.png'
import m3green from '../../assets/Images/Banner/m3.png'
import '../../App.css'

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const whyUsRef = useRef(null);

    const handleScroll = () => {
        const top = whyUsRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        if (isVisible) {
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

            <div 
                className=" flex flex-col md:flex-row  FadeIn"
                style={{
                    background: "url(./Images/BG.png) no-repeat",
                    backgroundSize: "100% 100%"
                }}
            >
                <div className='flex flex-col justify-center p-6 text-center md:text-left md:px-12 m-auto md:w-1/2 '>
                    <h1 className=' text-white text-xl md:text-lg lg:text-2xl xl:text-3xl font-bold font-Para  mb-6 xl:mb-8'>Grow Your Email Marketing Performance <br /> with  Laser-Targeted Insights</h1>
                    <p className=' text-white text-md md:text-lg xl:text-xl font-light  font-Para mb-10 lg:mb-16'>Generate Questionnaires, and more by enhancing your marketing emails with compelling customization.</p>
                    <div className='flex flex-row justify-center gap-2 md:gap-8 text-base md:text-xl font-Para'>
                        <button className='bg-accence text-black text-xs md:text-md lg:text-lg font-Para px-2 py-2 md:px-6 rounded-xl hover:bg-black hover:text-white hover:border-[#ADFC32] border-2 border-black duration-300 ease-in-out'>Start Your Free Trial</button>
                        <button
                            className='bg-white border-white text-xs md:text-md lg:text-lg  border-2 px-2 py-2 md:px-6 flex items-center gap-1 md:gap-2 font-Para rounded-xl hover:bg-black hover:text-white duration-300 ease-in-out'
                        >
                            <FaCirclePlay className='bg-accence rounded-full hover:bg-black' />
                            Watch a Demo
                        </button>
                    </div>

                </div>
                <div className='relative w-[300px] xs:w-[350px] sm:w-[400px] md:w-1/2 m-auto'>
                    <img src={Bannermobile} alt="" />
                    <img src={m1red} alt="" className='absolute w-[26%]  left-14 top-16 sm:left-20 sm:top-20 md:left-28 md:top-24 lg:left-28 lg:top-32 floatanimation' />
                    <img src={m2blue} alt=""  className='absolute w-[46%] bottom-3 left-9 sm:bottom-3 sm:left-9 md:bottom-3 md:left-9 lg:bottom-3 lg:left-9 floatanimation'/>
                    <img src={m3green} alt="" className='absolute w-[30%] bottom-24 right-12 sm:bottom-32 sm:right-12 md:bottom-36 md:right-7 lg:bottom-52 lg:right-20 floatanimation' />
                </div>

            </div>
           
        </>
    )
}

export default Banner