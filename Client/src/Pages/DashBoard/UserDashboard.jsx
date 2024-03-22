import React, { useState } from 'react'
import DashBoardNav from '..//../Components/Dashboard/DashboardNav'
import { FiChevronDown } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom'
import ImageHolder from '..//../assets/Images/DashBoard/ImageHolder.png'




const UserDashboard = () => {

    return (
        <div className='flex flex-row h-[100vh] overflow-hidden'>

            {/* SideBar */}
            <div className='md:basis-[45%] xl:basis-[23%]'>
                <DashBoardNav/>
            </div>



            <div className='font-poppins w-full'>
                <div className='flex flex-row text-custom-black justify-between items-center shadow-md sm:p-5 p-2 '>
                    <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold'>Dashboard</h1>
                    <div className='flex flex-row items-center px-2 md:px-5'>
                        <img src={ImageHolder} className='h-8 md:h-10 sm:h-6 px-2'></img>
                        <FiChevronDown className='mx-2' />
                    </div>
                </div>

                <div>
                    <Routes>
                        
                    </Routes>
                    </div>
            </div>

        </div>
    )
}

export default UserDashboard;