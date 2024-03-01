import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HubSpot from "../../assets/Images/Brands/hubspot-white.svg"
import Drip from "../../assets/Images/Brands/drip.svg"
import Acc from "../../assets/Images/Brands/acc-white.svg"
import smaily from "../../assets/Images/Brands/smaily.svg"

const Brand = () => {

    const BrandData = [
        {
            Title: "HubSpot",
            Image: HubSpot
        },
        {
            Title: "Drip",
            Image: Drip
        },
        {
            Title: "Acc",
            Image: Acc
        },
        {
            Title: "Smaily",
            Image: smaily
        }
    ]
    
    return (
        <div className='bg-primary w-[100vw] py-20'>
            <div className='w-[95%] md:w-[90%] lg:w-[85%] m-auto'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='basis-[45%] w-[100%]'>
                        <h2 className='text-white font-bold text-3xl'>2000+ brands using our website for proffesional Mailling</h2>
                    </div>
                    <div className='flex flex-col gap-8 basis-[45%]'>
                        <div className='bg-transparent'>
                            <Swiper
                                spaceBetween={30}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="h-fit py-8 md:py-16 px-5 md:px-10"
                            >
                                {BrandData.map((item, index) => (
                                    <SwiperSlide key={index} className='mr-10 m-auto'>
                                        <div>
                                            <img src={item.Image} alt="" className='w-[100px]' />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand