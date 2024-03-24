import React, { useState } from 'react'
import { AdminData } from '../../Data/AdminFormData'
import { FaPencilAlt } from "react-icons/fa";

const AdminForm = () => {
    const [editActive, seteditActive] = useState(false)
    return (
        <>
            {AdminData.map((item, index) => (
                <>
                    <div className='flex flex-col justify-center items-center gap-6  p-8 pb-14' key={index}>

                        <img src={item.AdminPic} alt="Admin" className=' w-28 md:w-36' />
                        <div className='flex flex-row gap-4 items-center'>
                            {editActive ?
                                <>
                                    <input type="email" value={item.Name} className=' text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                                    <FaPencilAlt className='text-sm md:text-xl cursor-pointer' onClick={() => { seteditActive(!editActive) }} />
                                </>
                                : <>
                                    <h2 className='font-Para text-2xl sm:text-3xl font-bold'>{item.Name}</h2>
                                    <FaPencilAlt className='text-sm md:text-xl cursor-pointer' onClick={() => { seteditActive(!editActive) }} />
                                </>
                            }
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 sm:px-16 md:px-24'>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className=' text-2xl sm:text-3xl font-head '>Email: </h2>
                            <div className='relative'>
                                <input type="email" value={item.Email} className=' text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                                <FaPencilAlt className='absolute top-[13px] right-[20px] text-sm md:text-base cursor-pointer' />
                            </div>

                        </div>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className='text-2xl sm:text-3xl font-head '>Gender: </h2>
                            <div className='relative'>
                                <input type="email" value={item.Gender} className='text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                                <FaPencilAlt className='absolute top-[13px] right-[20px] text-sm md:text-base cursor-pointer' />
                            </div>

                        </div>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className='text-2xl sm:text-3xl font-head '>Age: </h2>
                            <div className='relative'>
                                <input type="email" value={item.Age} className='text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                                <FaPencilAlt className='absolute top-[13px] right-[20px] text-sm md:text-base cursor-pointer' />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center my-6'>
                    <button
                        className={`py-3 px-6   rounded-full font-para  text-base font-bold bg-[#4D8AB6] hover:bg-[#3c5f78] text-white  ease-in-out duration-300`}
                    >
                        Update Profile
                    </button>
                    </div>

                </>
            ))}


        </>
    )
}

export default AdminForm
