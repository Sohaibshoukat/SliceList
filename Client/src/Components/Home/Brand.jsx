import React from 'react'
import HubSpot from "../../assets/Images/Brands/hubspot-white.svg"
import Drip from "../../assets/Images/Brands/drip.svg"
import Acc from "../../assets/Images/Brands/acc-white.svg"
import smaily from "../../assets/Images/Brands/smaily.svg"
import Kalviyo from "../../assets/Images/Brands/Kalviyo.png"
import vierless from "../../assets/Images/Brands/vierless.png"

import Marquee from 'react-fast-marquee';

const Brand = () => {

    const BrandData = [
        {
            Title: "HubSpot",
            Image: Kalviyo
        },
        {
            Title: "Drip",
            Image: vierless
        },
        {
            Title: "Acc",
            Image: Kalviyo
        },
        {
            Title: "Smaily",
            Image: vierless
        },
        {
            Title: "HubSpot",
            Image: Kalviyo
        },
        {
            Title: "Drip",
            Image: vierless
        },
        {
            Title: "Acc",
            Image: Kalviyo
        },
        {
            Title: "Smaily",
            Image: vierless
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