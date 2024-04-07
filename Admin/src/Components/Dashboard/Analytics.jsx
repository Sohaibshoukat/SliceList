import React from 'react'
import { FaUser, FaUserPlus } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'

const Analytics = () => {
  return (
    <div className="bg-white rounded-xl shadow-boxshade py-6 px-6 h-[100%]">
        <div className="flex flex-col gap-8 h-[100%]">
            <div className="flex flex-col gap-2">
                <h2 className='font-Para font-bold text-xl'>Hi! Admin</h2>
                <p className='font-Para text-base font-light text-gray-500'>5 March, 2024</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#FFE2E5] rounded-2xl py-6 pl-6 pr-2 flex flex-col gap-5">
                    <div className='p-3 bg-[#FA5A7D] rounded-full w-fit flex justify-center items-center'>
                        <FaUser className='text-white text-2xl'/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h2 className='font-Para text-2xl font-bold'>1K</h2>
                    <p className='text-lg font-Para text-gray-500'>Total Users</p>
                    </div>
                </div>
                <div className="bg-[#FFF4DE] rounded-2xl py-6 pl-6 pr-2 flex flex-col gap-5">
                    <div className='p-3 bg-[#FF947A] rounded-full w-fit flex justify-center items-center'>
                        <FaCartShopping className='text-white text-2xl'/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h2 className='font-Para text-2xl font-bold'>300</h2>
                    <p className='text-lg font-Para text-gray-500'>Total Plan Buy</p>
                    </div>
                </div>
                <div className="bg-[#DCFCE7] rounded-2xl py-6 pl-6 pr-2 flex flex-col gap-5">
                    <div className='p-3 bg-[#3CD856] rounded-full w-fit flex justify-center items-center'>
                        <MdDelete className='text-white text-2xl'/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h2 className='font-Para text-2xl font-bold'>5</h2>
                    <p className='text-lg font-Para text-gray-500'>Deleted Account</p>
                    </div>
                </div>
                <div className="bg-[#F3E8FF] rounded-2xl py-6 pl-6 pr-2 flex flex-col gap-5">
                    <div className='p-3 bg-[#BF83FF] rounded-full w-fit flex justify-center items-center'>
                        <FaUserPlus className='text-white text-2xl'/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h2 className='font-Para text-2xl font-bold'>8</h2>
                    <p className='text-lg font-Para text-gray-500'>New Customers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics