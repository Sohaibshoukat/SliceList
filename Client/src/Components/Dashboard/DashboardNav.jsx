import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoHome, IoSettingsOutline } from "react-icons/io5";
import { FaCartShopping, FaBox } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlusCircle, FaFont, FaRegQuestionCircle, FaTrashAlt, FaPhoneAlt } from "react-icons/fa";
import image from '..//../assets/Logo/log.png'
import MobileLogo from '..//../assets/Logo/06.png'
import ImageHolder from '..//../assets/Images/DashBoard/ImageHolder.png'
import { FiChevronDown } from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";

const DashboardNav = () => {
    const navigate = useNavigate()

    const tabs = [
        {
            name: 'Dashboard',
            Icon: IoHome,
            link: '/user-dashboard/',
        },
        {
            name: 'Subscription',
            Icon: FaCartShopping,
            link: '/user-dashboard/subscription',
        },
        {
            name: 'Payments',
            Icon: CiCreditCard1,
            link: '/user-dashboard/user-payment',
        },
        {
            name: 'Your Questions',
            Icon: TfiMenuAlt,
            link: '/user-dashboard/questions',
        },
        {
            name: 'Add Question',
            Icon: FaPlusCircle,
            link: '/user-dashboard/add-question',
        },
        {
            name: "Archived",
            Icon: FaBox,
            link: '/user-dashboard/archived',
        },
        {
            name: 'Fonts',
            Icon: FaFont,
            link: '/user-dashboard/fonts',
        },
        {
            name: "FAQ's",
            Icon: FaRegQuestionCircle,
            link: '/user-dashboard/faq',
        },
        {
            name: 'Setting',
            Icon: IoSettingsOutline,
            link: '/user-dashboard/setting',
        },
        {
            name: 'Trash',
            Icon: FaTrashAlt,
            link: '/user-dashboard/trash',
        },
        {
            name: 'Contact us',
            Icon: FaPhoneAlt,
            link: '/user-dashboard/contact',
        }
    ];

    return (
        <div className={`flex-col bg-primary xl:h-full  px-2 pt-2 md:pt-8 w-[100%] h-[100vh] items-center shadow-md `}>
            <img className='hidden md:block pb-10 px-6' src={image}></img>
            <img className='md:hidden text-center m-auto w-10 h-12 pb-2' src={MobileLogo}></img>
            <ul className='flex flex-col gap-4 overflow-y-scroll max-h-[75vh]'>
                {tabs.map((tab, index) => (
                    <Link key={index} to={tab.link}>
                        <li>
                            <div
                                className={`
                                    inline-flex w-full px-4 py-4 gap-4 items-center text-darkgray 
                                    group  ease-in-out duration-300 hover:bg-accence hover:rounded-2xl hover:text-primary
                                    ${location.pathname === tab.link ? 'bg-accence rounded-2xl text-primary shadow-2xl' : 'text-darkgray'}
                                `}>
                                <tab.Icon className='text-2xl' />
                                <div className={`hidden md:block font-Para text-lg `}>
                                    {tab.name}
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}  
                
            </ul>
            <div
                        className={`
                                    hidden md:flex w-full px-4 py-4 gap-4 items-center  text-darkgray
                                    group  ease-in-out duration-300 border-t-2 border-gray-800 
                                `}

                    >
                        <img src={ImageHolder}></img>
                        <div>
                            <div className='inline-flex items-center'>
                                <div className='text-white '>user name</div>
                                <FiChevronDown className='mx-4' />
                            </div>
                            <div>username@email.com</div>
                        </div>
                    </div>

                    <div className='md:hidden flex px-4 py-4 w-full items-center text-darkgray 
                                    ease-in-out duration-300 hover:bg-accence hover:rounded-2xl hover:text-primary bottom-0 relative'>
                        <RiShutDownLine className='text-2xl' />
                    </div>
        </div>
    )
}

export default DashboardNav;