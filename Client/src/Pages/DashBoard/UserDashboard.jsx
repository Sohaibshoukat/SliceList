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

                {/* <div>
                    
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/subscription-plan'
                            element={<SubscriptionPlan />}
                        />
                        <Route
                            path='/user-analysis'
                            element={<UserAnalysis />}
                        />
                        <Route
                            path='/blocked-users'
                            element={<BlockUser />}
                        />
                        <Route
                            path='/features'
                            element={<Features />}
                        />
                        <Route
                            path='/FAQ'
                            element={<FAQ />}
                        />
                        <Route
                            path='/form-design'
                            element={<UploadForm />}
                        />
                        <Route
                            path='/blogs'
                            element={<Blogs />}
                        />
                        <Route
                            path='/testimonials'
                            element={<Testimonials />}
                        />
                    </Routes>
                </div> */}
            </div>

        </div>
    )
}

export default UserDashboard;