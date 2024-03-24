import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

FaInstagram

const Footer = () => {
    const SocialMedia=[
        {
            Title:"Facebook",
            Icon:FaFacebook,
            Link:""
        },
        {
            Title:"Instagram",
            Icon:FaInstagram,
            Link:""
        },
        {
            Title:"Youtube",
            Icon:FaYoutube,
            Link:""
        },
        {
            Title:"Twitter",
            Icon:FaTwitter,
            Link:""
        }
    ]
  return (
    <>
    <div className='bg-primary md:px-14 py-6 px-4'>
        <div className="md:w-[95%] m-auto">
            <div className="flex flex-col xl:flex-row justify-between gap-10 lg:gap-20">
                <div className='basis-[33.3333%]'>
                    <img src="./Logo/log.png" alt="" className='w-[200px] md:w-[250px] h-auto mb-5 md:mb-10' />
                    <p className='text-white text-base md:text-lg font-light max-w-[90%] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam quia, alias iure ex omnis, quasi libero animi corporis in amet voluptas odit inventore quos officiis quo quod suscipit doloremque. Laborum commodi maxime fugiat?</p>
                </div>
                <div className="basis-[33.333%] text-white flex flex-col md:flex-row xl:flex-col gap-x-20">
                    <div className='flex flex-col gap-6 mb-8'>
                        <h2 className='text-2xl md:text-3xl font-extrabold'>Follow Us</h2>
                        <div className="flex gap-2 md:gap-4">
                            {SocialMedia.map((item,index)=>(
                                <a href={item.Link}>
                                    <item.Icon className='text-3xl md:text-4xl'/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-2xl md:text-3xl font-extrabold'>Contact Us</h2>
                        <h3 className='text-lg md:text-xl font-normal'>Mail@Support.com</h3>
                    </div>
                </div>
                <div className="md:basis-[33.3333%]  text-white">
                    <h2 className='text-2xl md:text-3xl font-extrabold mb-6'>Subscription</h2>
                    <div className='bg-white rounded-full py-1 pl-2 md:pl-4 pr-1 flex justify-between w-fit'>
                        <input type="email" className='text-black bg-transparent w-[60%] px-2 focus-visible:outline-none placeholder:text-gray-400 border-none text-lg md:text-xl font-semibold rounded-full' placeholder='Your Email' />
                        <button className='bg-accence px-3 py-1 md:px-6 md:py-1 text-black text-lg md:text-xl font-bold rounded-full'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='w-[100%] text-center py-2 text-xs  md:text-sm'>
        <p className='font-Para'>© Copyright 2024 SliceList LTD . All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer