import React from 'react'

import Marquee from 'react-fast-marquee';

const Brand = () => {

    const BrandData = [
        {
            Title: "HubSpot",
            Image: "./Images/Brands/Kalviyo.png"
        },
        {
            Title: "Drip",
            Image: "./Images/Brands/vierless.png"
        },
        {
            Title: "Acc",
            Image: "./Images/Brands/Kalviyo.png"
        },
        {
            Title: "Smaily",
            Image: "./Images/Brands/vierless.png"
        },
        {
            Title: "HubSpot",
            Image: "./Images/Brands/Kalviyo.png"
        },
        {
            Title: "Drip",
            Image: "./Images/Brands/vierless.png"
        },
        {
            Title: "Acc",
            Image: "./Images/Brands/Kalviyo.png"
        },
        {
            Title: "Smaily",
            Image: "./Images/Brands/vierless.png"
        },
    ]

    return (
        <div className='bg-white w-[100vw] py-10 md:py-20'>
            <div className='w-[100%] md:w-[90%] xl:w-[85%] m-auto'>
                <div className='flex flex-col md:flex-row justify-between gap-y-16 gap-x-6 items-center'>
                    <div className='xl:basis-[45%] md:basis-[50%] md:w-[50%]'>
                        <h2 className='text-black tracking-widest font-bold text-3xl  md:text-4xl lg:text-5xl text-center md:text-left font-head'>2000+ brands using our question website</h2>
                    </div>
                    <div className='xl:basis-[50%] md:basis-[50%] md:w-[50%] w-[100%]'>
                        <div className=' flex flex-col gap-y-8'>
                        <Marquee direction="right" speed={50} gradientWidth={500}>
                            {BrandData.map((item, index) => (
                                <div className='w-[100px] md:w-[150px] mx-6' key={index}>
                                    <img src={item.Image} />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee direction="left" speed={50}>
                            {BrandData.map((item, index) => (
                                <div className='w-[100px] md:w-[150px] mx-6' key={index}>
                                    <img src={item.Image} />
                                </div>
                            ))}
                        </Marquee>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand