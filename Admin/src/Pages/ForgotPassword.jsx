import React from 'react'
import { ForgotFields } from '../Data/Forgot'
import Slice from '../assets/slice.png'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const nav = useNavigate();

    const NavigatePage=(url)=>{
        nav(url)
    }

    return (
        <>
            <div className='flex flex-col h-screen justify-center items-center'>

                <div className=' w-[90%] md:w-[60%] lg:w-[45%]  m-auto   '>
                    {ForgotFields.map((item, index) => (
                        <div className={`border-t-[30px] md:border-t-[40px] border-b-[20px] border-x-[20px] border-black rounded-lg relative bg-black  text-black h-full shadow-xl hover:-translate-y-3 hover:shadow-2xl duration-300 ease-in-out`}>

                            <div className='rounded-3xl p-2 md:p-4 '>
                                <img src={Slice} alt="Logo" className='mx-auto pb-24 lg:w-[200px]' />
                                <div className='flex flex-col justify-between mb-2 md:mb-4'>

                                    <h2 className={`text-xl md:text-3xl font-bold  font-Para text-white `}>{item.Name}</h2>
                                    <p className='text-white font-Para text-sm md:text-base '>Please enter your email</p>
                                </div>
                                <input type="email" placeholder='example@mail.com' className={`py-3 px-4 rounded-lg w-full font-para mb-4 text-base md:text-xl  border border-white text-white bg-black hover:bg-black hover:border-[#ADFC32] hover:text-white duration-300 ease-in-out  focus:border-[#ADFC32] `} />


                                <button
                                    className={`py-3 px-4 rounded-lg w-full font-para text-base md:text-xl font-bold text-black bg-white border-2 border-black hover:bg-accence hover:border-[#ADFC32] hover:bg-[#ADFC32] hover:text-black duration-300 ease-in-out mb-40 md:mb-40 `}
                                    onClick={()=>NavigatePage("/updatePassword")}
                                >
                                    Reset Password
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ForgotPassword
