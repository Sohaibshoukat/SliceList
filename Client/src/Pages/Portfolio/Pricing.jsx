import React from 'react'
import ToggleButton from '../../Components/ToggleButton'
import Card from '../../Components/Card'
import Accordion from '../../Components/Accordion'
import GreenCard from '../../Components/GreenCard'

const Pricing = () => {
  return (
    <>
      
      {/* Heading and Toggle  */}
      <div className='flex flex-row items-center justify-center h-96'>
        <div className='flex flex-col gap-8 items-center justify-center w-[50%]'>
          <h1 className='text-primary font-Heading text-4xl'>Leap from Free to Phenomenal: Grow with Us!</h1>
          <ToggleButton />
        </div>
      </div>

      {/* Card Component */}
      <div className='flex flex-col pb-20 px-8 justify-center items-center gap-10 lg:flex-row'>
        <Card heading={"BASIC"} price={"$0"} buttonText={"Sign up, it's free"} />
        <Card heading={"PRO"} price={"$19.99"} buttonText={"Buy Now"} />
        <GreenCard heading={"ADVANCED"} price={"$39.99"} buttonText={"Buy Now"} />
      </div>

      {/* Heading 2 */}
      <div className='flex  p-14 items-center justify-center '>
        <h1 className='text-primary font-Heading text-5xl'>FREQUENTLY ASKED QUESTIONS </h1>
      </div>

      {/* Accordion and Video */}
      <div className='grid grid-cols-1 gap-24 lg:grid-cols-2 p-10 md:px-28  mb-44 '>
        <div className=''>
          <Accordion />
        </div>
        <div className=''>
          <video class="w-full rounded-lg" autoplay controls>
            <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  )
}

export default Pricing