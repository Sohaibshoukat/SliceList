import React from 'react'
import { FaUser } from "react-icons/fa";

const NewAdmin = () => {
  return (
    <>
            <div className={`flex flex-col  justify-center items-center rounded-md m-10 `} style={{ boxShadow: "1px 1px 7.800000190734863px 0px #00000040" }}>


                <div className={` w-full  m-auto  rounded-lg relative bg-transparent  text-black  shadow-xl  p-10`}>

                    <div className='flex flex-row gap-3 items-baseline mb-6  md:mb-8 '>
                        <FaUser className='text-2xl' />

                        <h2 className={`text-xl md:text-3xl font-bold  font-head text-black `}>Add new admin</h2>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 sm:px-8 md:px-10'>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className=' text-lg sm:text-xl font-Heading font-semibold'>Name: </h2>
                            <div className='relative'>
                                <input type="email" placeholder="Enter Name" className=' text-base sm:text-lg border-2 p-2 rounded-md w-full' />

                            </div>

                        </div>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className='text-lg sm:text-xl font-Heading font-bold'>Email: </h2>
                            <div className='relative'>
                                <input type="email" placeholder="Enter Email" className='text-base sm:text-lg border-2 p-2 rounded-md w-full' />

                            </div>

                        </div>
                        <div className=' flex flex-col  gap-3'>
                            <h2 className='text-lg sm:text-xl font-Heading font-bold'>Image: </h2>
                            <div className='relative'>
                                <input type="file" placeholder="Import from computer" className='text-base sm:text-lg border-2 p-2 rounded-md w-full' />

                            </div>

                        </div>

                    </div>

                    <div className='flex flex-row justify-end my-5 mx-16'>
                        <button
                            className={`py-3 px-6   rounded-full font-para  text-base font-bold bg-[#4D8AB6] text-white  `}
                        >
                            Make Admin
                        </button>
                    </div>

                </div>
            </div>

        </>
  )
}

export default NewAdmin
