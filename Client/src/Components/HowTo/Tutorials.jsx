import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const Tutorials = () => {
    return (
        <>  
        
            <div className='flex flex-row items-center justify-center pt-24 md:pt-36 px-14 sm:px-32 pb-20 md:px-56'>
                <h1 className='text-primary font-Heading text-xl sm:text-3xl font-extrabold md:text-5xl uppercase text-center'>BEGIN WITH TUTORIALS, THRIVE WITH OUR SUPPORT!</h1>
            </div>


            <div className='grid px-14 gap-14 md:gap-0 md:px-24 lg:px-36 md:grid-cols-2'>

                <div className='py-28 order-10 md:order-none rounded-lg md:rounded-l-lg md:rounded-r-none bg-primary flex justify-center items-center hover:cursor-pointer'>
                    <div className='flex justify-center items-center relative'>
                        <FaCircle className='text-gray-500 text-7xl relative' />
                        <FaPlay className='text-accence absolute text-2xl ' />
                    </div>

                </div>

              

                <div class="order-none md:order-10 py-16 gap-5 p-6 bg-white border border-gray-200 rounded-lg md:rounded-r-lg md:rounded-l-none shadow-lg flex flex-col justify-center items-center ">
                    <h5 class="mb-2 sm:text-xl md:text-2xl font-extrabold tracking-tight text-primary text-center uppercase font-Heading ">How to create Email Countdown question?</h5>

                    <p class="mb-3 font-para font-normal text-primary text-xs sm:text-sm md:text-base text-center">Lorem ipsum dolor sit amet consectetur. Imperdiet nisi quam hendrerit sapien. Volutpat nullam libero suscipit leo a. Donec proin egestas egestas nullam egestas turpis volutpat. Consectetur in tellus quisque lacus consequat amet sagittis.</p>
                    <div className='text-center'>

                        <button className='inline-flex items-center px-6 py-3 text-xs md:text-sm font-bold   text-center text-white bg-primary rounded-sm md:rounded-md hover:bg-accence hover:text-primary   '>Read More</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Tutorials
