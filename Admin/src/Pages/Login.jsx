import React, { useState } from 'react'
import { LoginFields } from '../Data/Login'
import Slice from '../assets/slice.png'
import { RiEyeCloseLine } from "react-icons/ri";

const Login = () => {
  


    return (
        <>
            <div className='flex flex-col h-screen justify-center items-center'>

                <div className=' w-[90%] md:w-[60%] lg:w-[40%]  m-auto   '>
                    {LoginFields.map((item, index) => (
                        <div className={`border-t-[30px] md:border-t-[40px] border-b-[20px] border-x-[20px] border-black rounded-lg relative bg-black  text-black h-full shadow-xl hover:-translate-y-3 hover:shadow-2xl duration-300 ease-in-out`}>

                            <div className='rounded-3xl p-2 md:p-4'>
                                <img src={Slice} alt="Logo" className='pl-14 pb-10' />
                                <div className='flex flex-col justify-between mb-2 md:mb-4'>

                                    <h2 className={`text-xl md:text-4xl font-bold  font-Para text-white `}>{item.Name}</h2>
                                    <p className='text-white font-Para text-base md:text-lg '>Glad you’re back.!</p>
                                </div>
                                <input type="text" placeholder='Username' className={`py-3 px-4 rounded-lg w-full font-para mb-4 text-base md:text-xl  border border-white text-white bg-black hover:bg-black hover:border-[#ADFC32] hover:text-white duration-300 ease-in-out  focus:border-[#ADFC32] `} />
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={`py-3 px-4 rounded-lg w-full font-para mb-4 text-base md:text-xl border border-white text-white bg-black hover:bg-black hover:border-[#ADFC32] hover:text-white duration-300 ease-in-out`}
                                    />
                                    <RiEyeCloseLine className="absolute top-7 right-4 transform -translate-y-1/2 text-white" />
                                </div>


                                <div className='pb-3 flex flex-row' >
                                    <input type="checkbox" className='mr-2' />
                                    <p className='text-white'>Remember me</p>
                                </div>


                                <button
                                    className={`py-3 px-4 rounded-lg w-full font-para mb-4 text-base md:text-xl font-bold text-black bg-white border-2 border-black hover:bg-accence hover:border-[#ADFC32] hover:bg-[#ADFC32] hover:text-black duration-300 ease-in-out `}
                                >
                                    Login
                                </button>
                                <h2 className={`text-sm md:text-base tracking-wider text-center mb-16 md:mb-16 font-head text-white`}>Forgot password?</h2>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Login;