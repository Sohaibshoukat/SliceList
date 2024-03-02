import React from 'react'
import {cardsData} from '../../Data/HowTo/HowToPageCardData'
import Card from './Card'

const IntegrationCards = () => {
  return (
    <>
        {/* Heading 2 */}
      <div className='  py-14 px-14 flex flex-row  items-center justify-center gap-2'>
        <h1 className='text-primary font-Heading text-2xl sm:text-3xl font-extrabold md:text-5xl uppercase text-center'>integration </h1>
        <h1 className='text-accence md:text-primary font-Heading text-2xl sm:text-3xl font-extrabold md:text-5xl uppercase text-center'> guides</h1>
      </div>

      {/* Cards */}
      <div className='pb-24'>
        <div className='grid grid-cols-2 lg:grid-cols-3  px-14 gap-3 md:gap-14 lg:px-36 '>
          {cardsData.map((card, index) => (
            <Card key={index} cardData={card}/>
          ))}
        </div>

      </div>
    </>
  )
}

export default IntegrationCards
