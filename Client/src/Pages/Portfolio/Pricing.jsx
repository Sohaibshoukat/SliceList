import React from 'react'

import Plans from '../../Components/Pricing/Plans'
import FAQ from '../../Components/Pricing/FAQ'

import BgBall from "../../assets/Images/image.png"


const Pricing = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center py-20 md:py-32 relative'>
        <img src={BgBall} alt="" className='absolute -z-10 -bottom-[90%] xl:-bottom-[80%] -left-[10%] w-[250px] md:w-[300px] lg:w-auto' />
        <img src={BgBall} alt="" className='rotate-180 absolute -z-10 -top-[60%] -right-[10%] w-[250px]  md:w-[300px] lg:w-auto' />
        <div className='flex flex-col gap-4 md:gap-8 items-center justify-center w-[90%] md:w-auto'>
          <h1 className='text-primary font-Heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-center'>Leap from Free to Phenomenal: <br className='hidden md:block' /> Grow with Us!</h1>
          <p className='text-lg md:text-xl text-center xl:text-2xl font-light md:max-w-[80%] xl:max-w-[60%] font-Para'>No credit card required. Cancel any time. All taxes included. </p>
        </div>
      </div>

      <Plans />

      <FAQ />
    </>
  )
}

export default Pricing