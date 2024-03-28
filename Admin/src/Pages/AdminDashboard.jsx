import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { FiChevronDown } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom'
import SubscriptionPlan from './Views/SubscriptionPlan';
import Home from './Views/Home';
import UserAnalysis from './Views/UserAnalysis';
import BlockUser from './Views/BlockUser';
import Features from './Views/Features';
import FAQ from './Views/FAQ';
import UploadForm from './Views/UploadForm';
import Blogs from './Views/Blogs';
import Testimonials from './Views/Testimonials';
import AdminProfile from './Views/AdminProfile';
import Setting from './Views/Settings';
import EditTestimonial from './Views/EditTestimonial';
import CreateTestimonials from './Views/CreateTestimonials';
import EditBlog from './Views/CreateBlog';
import CreateBlog from './Views/CreateBlog';
import IntegrationGuides from './Views/IntegrationGuides';
import CreateIntegrationGuides from './Views/CreateIntegrationGuides';


const AdminDashboard = () => {

    return (
        // overflow-hidden
        <div className='flex flex-row h-[100vh] overflow-hidden '>

            {/* SideBar */}
            <div className='md:basis-[45%] xl:basis-[20%]'>
                <Nav />
            </div>



            <div className='font-poppins w-full overflow-scroll'>
                <div className='flex flex-row text-custom-black justify-between items-center shadow-md sm:p-5 p-2 '>
                    <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold'>Dashboard</h1>
                    <div className='flex flex-row items-center px-2 md:px-5'>
                        <img src='../public/assets/ImageHolder.png' className='h-8 md:h-10 sm:h-6 px-2'></img>
                        <h1 className='md:text-xl sm:text-base'>Admin</h1>
                        <FiChevronDown className='mx-2' />
                    </div>
                </div>

                <div className='pb-20 overflow-y-scroll overflow-x-hidden h-[100%]'>
                    {/* Routes Here */}
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
                            path='/integration-guides'
                            element={<IntegrationGuides/>}
                        />
                        <Route
                            path='/create-integration-guides'
                            element={<CreateIntegrationGuides/>}
                        />
                        <Route
                            path='/create-blogs'
                            element={<CreateBlog/>}
                        />
                        <Route
                            path='/Settings'
                            element={<Setting />}
                        />
                        <Route
                            path='/admin-profile'
                            element={<AdminProfile/>}
                        />
                        <Route
                            path='/testimonials'
                            element={<Testimonials />}
                        />
                        <Route
                            path='/edit-testimonial'
                            element={<EditTestimonial />}
                        />
                        <Route
                            path='/create-testimonial'
                            element={<CreateTestimonials />}
                        />
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard;