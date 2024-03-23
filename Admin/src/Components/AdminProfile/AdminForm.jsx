import React from 'react'
import { AdminData } from '../../Data/AdminFormData'
import { FaPencilAlt } from "react-icons/fa";

const AdminForm = () => {
    return (
        <>
            {AdminData.map((item, index) => (
                <>
                    <div className='flex flex-col justify-center items-center gap-6  p-8 pb-14' key={index}>

                        <img src={item.AdminPic} alt="Admin" className=' w-28 md:w-36' />
                        <h2 className='font-Para text-2xl sm:text-3xl font-bold'>{item.Name}</h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 sm:px-16 md:px-24'>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className=' text-2xl sm:text-3xl font-head '>Email: </h2>
                            <div className='relative'>
                            <input type="email" placeholder={item.Email} className=' text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                            <FaPencilAlt className='absolute top-[13px] right-[20px] text-sm md:text-base'/>
                            </div>

                        </div>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className='text-2xl sm:text-3xl font-head '>Gender: </h2>
                            <div className='relative'>
                            <input type="email" placeholder={item.Gender} className='text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                            <FaPencilAlt className='absolute top-[13px] right-[20px] text-sm md:text-base'/>
                            </div>

                        </div>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className='text-2xl sm:text-3xl font-head '>Age: </h2>
                            <div className='relative'>
                            <input type="email" placeholder={item.Age} className='text-base sm:text-lg border-2 p-2 rounded-md w-full' />
                            <FaPencilAlt className='absolute top-[13px] right-[20px] text-sm md:text-base'/>
                            </div>

                        </div>
                        
                    </div>
                </>
            ))}


        </>
    )
}

export default AdminForm
