import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { FiChevronDown } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom'
import SubscriptionPlan from './SubscriptionPlan';


const AdminDashboard = () => {

    return (
        <div className='flex  flex-row'>

            {/* SideBar */}
            <div>
                <Nav />
            </div>



            <div className='font-poppins w-full'>
                <div className='flex flex-row text-custom-black justify-between items-center shadow-md sm:p-5 p-2 '>
                    <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold'>Dashboard</h1>
                    <div className='flex flex-row items-center px-2 md:px-5'>
                        <img src='../assets/ImageHolder.png' className='h-8 md:h-10 sm:h-6 px-2'></img>
                        <h1 className='md:text-xl sm:text-base'>Admin</h1>
                        <FiChevronDown className='mx-2' />
                    </div>
                </div>

                <div>
                    {/* Routes Here */}
                    <Routes>
                        <Route path='/admin-dashboard/subscription-plan' element={<SubscriptionPlan />} />
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard;