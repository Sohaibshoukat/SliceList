import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation(); // Using useLocation hook to get the current location

    const tabs = [
        {
            name: 'Dashboard',
            Icon: "../assets/Navigation/Dashboard.png",
            link: '/admin-dashboard',
        },
        {
            name: 'Subscription Plan',
            Icon: "../assets/Navigation/Cart.png",
            link: '/admin-dashboard/subscription-plan',
        },
        {
            name: 'User Analysis',
            Icon: "../assets/Navigation/NewUser.png",
            link: '/admin-dashboard/user-analysis',
        },
        {
            name: 'Blocked Users',
            Icon: "../assets/Navigation/Block.png",
            link: '/admin-dashboard/blocked-users',
        },
        {
            name: 'Features',
            Icon: "../assets/Navigation/Feature.png",
            link: '/admin-dashboard/features',
        },
        {
            name: "FAQ's",
            Icon: "../assets/Navigation/FAQ.png",
            link: '/admin-dashboard/FAQ',
        },
        {
            name: 'Form Design',
            Icon: "../assets/Navigation/Form.png",
            link: '/admin-dashboard/form-design',
        },
        {
            name: 'Blogs',
            Icon: "../assets/Navigation/Blog.png",
            link: '/admin-dashboard/blogs',
        },
        {
            name: 'Testimonials',
            Icon: "../assets/Navigation/Testimonials.png",
            link: '/admin-dashboard/testimonials',
        },
        {
            name: 'Sign Out',
            Icon: "../assets/Navigation/SignOut.png",
            link: '/admin-dashboard/login',
        }
    ];
    return (
        <div className={`flex-col bg-white xl:h-full h-screen px-5 pt-8 w-15 md:w-72 items-center shadow-md`}>
            <img className='hidden sm:block pb-5 px-6' src='../assets/Logo.png'></img>
            <img className='md:hidden pb-3' src='../assets/LogoMobile.png'></img>
            <ul>
                {tabs.map((tab, index) => (
                    <Link key={index} to={tab.link}>
                     
                        <li>
                            <div className={`inline-flex w-full sm:px-3 sm:py-1 sm:my-2 gap-5 items-center text-custom-gray hover:text-custom-black ${location.pathname === tab.link ? 'sm:bg-black sm:rounded-lg text-white' : ''}`}>
                                <img className='py-2'src={tab.Icon}></img>
                                <div className='hidden sm:block'>
                                    {tab.name}
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Nav;