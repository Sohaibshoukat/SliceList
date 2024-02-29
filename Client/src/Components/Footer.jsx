import React from 'react'
import logo from "../assets/Logo/log.png"
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
    <div className='bg-primary px-14 py-6'>
        <div className="w-[95%] m-auto">
            <div className="flex flex-row justify-between gap-20">
                <div className='basis-[33.3333%]'>
                    <img src={logo} alt="" className='w-[250px] h-auto mb-10' />
                    <p className='text-white text-xl font-light max-w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam quia, alias iure ex omnis, quasi libero animi corporis in amet voluptas odit inventore quos officiis quo quod suscipit doloremque. Laborum commodi maxime fugiat?</p>
                </div>
                <div className="basis-[33.333%] text-white">
                    <div className='flex flex-col gap-6 mb-4'>
                        <h2 className='text-3xl font-extrabold'>Follow Us</h2>
                        <div className="flex gap-4">

                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl font-extrabold'>Contact Us</h2>
                        <h3 className='text-xl font-normal'>Mail@Support.com</h3>
                    </div>
                </div>
                <div className="basis-[33.3333%]  text-white">
                    <h2 className='text-3xl font-extrabold mb-6'>Subscription</h2>
                    <div className='bg-white rounded-full py-1 pl-4 pr-1 flex justify-between'>
                        <input type="email" className='text-black placeholder:text-gray-400 border-none text-xl font-semibold' placeholder='Your Email' />
                        <button className='bg-accence px-6 py-2 text-black text-2xl font-bold rounded-full'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer