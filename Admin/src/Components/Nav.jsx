import React, { useEffect, useState } from 'react';
import { FaChartPie, FaRegQuestionCircle, FaUserPlus } from "react-icons/fa";
import { FaBloggerB } from 'react-icons/fa6'
import { IoCartOutline } from "react-icons/io5";
import { IoIosListBox, IoIosPeople } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MdBlock } from "react-icons/md"
import { LiaWpforms } from "react-icons/lia"
import { PiSignOut } from "react-icons/pi"

const Nav = () => {
    const navigate = useNavigate()

    const tabs = [
        {
            name: 'Dashboard',
            Icon: FaChartPie,
            link: '/admin-dashboard/',
        },
        {
            name: 'Subscription Plan',
            Icon: IoCartOutline,
            link: '/admin-dashboard/subscription-plan',
        },
        {
            name: 'User Analysis',
            Icon: FaUserPlus,
            link: '/admin-dashboard/user-analysis',
        },
        {
            name: 'Blocked Users',
            Icon: MdBlock,
            link: '/admin-dashboard/blocked-users',
        },
        {
            name: 'Features',
            Icon: IoIosListBox,
            link: '/admin-dashboard/features',
        },
        {
            name: "FAQ's",
            Icon: FaRegQuestionCircle,
            link: '/admin-dashboard/FAQ',
        },
        {
            name: 'Form Design',
            Icon: LiaWpforms,
            link: '/admin-dashboard/form-design',
        },
        {
            name: 'Blogs',
            Icon: FaBloggerB,
            link: '/admin-dashboard/blogs',
        },
        {
            name: 'Admin Profile',
            Icon: FaBloggerB,
            link: '/admin-dashboard/admin-profile',
        },
        {
            name: 'testimonials',
            Icon: IoIosPeople,
            link: '/admin-dashboard/testimonials',
        }
    ];

    return (
        <div className={`flex-col bg-white xl:h-full  px-2 pt-2 md:pt-8 w-[100%] h-[100vh] items-center shadow-md`}>
            <img className='hidden md:block pb-10 px-6' src='../assets/Logo.png'></img>
            <img className='md:hidden text-center m-auto w-10 pb-2' src='../assets/LogoMobile.png'></img>
            <ul className='flex flex-col gap-4 overflow-y-scroll max-h-[80vh]'>
                {tabs.map((tab, index) => (
                    <Link key={index} to={tab.link}>
                        <li>
                            <div
                                className={`
                                    inline-flex w-full px-4 py-4 gap-4 items-center text-custom-gray 
                                    group  ease-in-out duration-300 hover:bg-black hover:rounded-2xl hover:text-white
                                    ${location.pathname === tab.link ? 'bg-black rounded-2xl text-white shadow-2xl' : 'text-gray-500'}
                                `}>
                                <tab.Icon className='text-2xl' />
                                <div className={`hidden md:block font-Para text-lg `}>
                                    {tab.name}
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
                <li>
                    <div
                        className={`
                                    inline-flex w-full px-4 py-4 gap-4 items-center text-custom-gray text-gray-500
                                    group  ease-in-out duration-300 hover:bg-black hover:rounded-2xl hover:text-white     
                                `}
                        onClick={()=>{
                            navigate('/login')
                        }}
                    >
                        <PiSignOut className='text-2xl' />
                        <div className={`hidden md:block font-Para text-lg `}>
                            Sign Out
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Nav;