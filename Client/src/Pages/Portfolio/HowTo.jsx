import React, { useEffect, useState } from 'react'
import HowToCard from '../../Components/HowToCard'
import IntegrationGuidesCard from '../../Components/IntegrationGuidesCard'
import { cardsData } from '../../Data/HowToPageCardData'
const HowTo = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Heading 1 */}
      <div className='flex flex-row items-center justify-center pt-24 md:pt-36 px-14 sm:px-32 pb-20 md:px-56'>
        <h1 className='text-primary font-Heading text-xl sm:text-3xl font-bold md:text-5xl uppercase text-center'>BEGIN WITH TUTORIALS, THRIVE WITH OUR SUPPORT!</h1>
      </div>


      {/* Video and Card */}
      <div className='grid px-14 gap-14 md:gap-0 md:px-24 lg:px-36 md:grid-cols-2'>
        {/* Video on large screens */}
        <video className="w-full rounded-lg md:rounded-l-lg md:rounded-r-none h-full order-1 md:order-none" autoPlay controls>
          <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* HowToCard on small screens */}
        <HowToCard className="order-none md:order-first" />
      </div>

      {/* Heading 2 */}
      <div className='  py-14 px-14 flex flex-row  items-center justify-center gap-2'>
        <h1 className='text-primary font-Heading text-2xl sm:text-3xl font-bold md:text-5xl uppercase text-center'>integration </h1>
        <h1 className='text-accence md:text-primary font-Heading text-2xl sm:text-3xl font-bold md:text-5xl uppercase text-center'> guides</h1>
      </div>

      {/* Cards */}
      <div className='pb-24'>
        <div className='grid grid-cols-2 lg:grid-cols-3  px-14 gap-3 md:gap-14 lg:px-36 '>
          {cardsData.map((card, index) => (
            <IntegrationGuidesCard key={index} cardData={card} />
          ))}
        </div>

      </div>


    </>
  )
}

export default HowTo