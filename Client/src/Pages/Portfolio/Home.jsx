import React from 'react'
import Banner from '../../Components/Home/Banner'
import Brand from '../../Components/Home/Brand'
import Plans from '../../Components/Pricing/Plans'
import Why from '../../Components/Home/Why'
import Testimonial from '../../Components/Home/Testimonial'
import Features from '../../Components/Home/Features'

import BgBall from "../../assets/Images/image.png"
import Blogs from '../../Components/Home/Blogs'

const Home = () => {
  return (
    <>
      <Banner />

      <Brand />

      <Why />

      <Testimonial />

      <Features />

      <div className='flex flex-col justify-center my-16 md:my-32 relative'>
        <img src={BgBall} alt="" className='absolute -z-10 top-[5%] -left-[10%] w-[250px] md:w-[300px] lg:w-auto' />
        <div className="mb-10 text-center">
          <h1 className='text-5xl md:text-5xl lg:text-6xl font-head  font-extrabold lg:leading-[4rem] mb-4'>Start Free Then <br /> Grow With Us</h1>
          <p className='text-xl font-Para font-light w-[90%] m-auto text-black'>No credit card required. Cancel any time. All taxes included. </p>
        </div>
        <Plans />
      </div>

      <Blogs/>
    </>
  )
}

export default Home