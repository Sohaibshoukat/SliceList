import React, { useState } from 'react'
import { IoMdPricetags } from "react-icons/io";
import { PricingPlan } from '../../Data/CardData';
import { FaCheck } from 'react-icons/fa';

const Plans = () => {
    const [selected, setSelected] = useState("Monthly");

    const toggleSelected = (item) => {
        setSelected(item);
    };
    return (
        <div className='w-[95%] md:w-[90%] xl:w-[80%] m-auto pt-0 pb-4 xl:py-8'>
            <div className='flex justify-center items-center m-auto w-[90%] lg:w-[60%] xl:w-[40%] bg-black rounded-xl text-xl md:text-2xl font-bold text-white p-1 mb-10 md:mb-20'>
                <div 
                    className={`cursor-pointer h-[100%] basis-[50%] font-head text-center px-2 py-2 md:px-6 ${selected == "Monthly" && "bg-white text-black rounded-xl bounceleft"} duration-300 ease-in-out`} 
                    onClick={() => { toggleSelected("Monthly") }}
                >
                    <h1>Monthly</h1>
                </div>
                <div 
                    className={`cursor-pointer flex gap-2 basis-[50%] font-head px-1 md:px-2 py-2 justify-center items-center ${selected == "Yearly" && "bg-white text-black rounded-xl bounceright"} duration-300 ease-in-out`} 
                    onClick={() => { toggleSelected("Yearly") }}
                >
                    <h1>Yearly</h1>
                    <div className='hidden md:flex gap-2 text-xs md:text-base font-Para justify-center items-center font-light'>
                        <IoMdPricetags className="text-accence" />
                        <p>Get 1 Month Free</p>
                    </div>
                </div>
            </div>

            <div className='grid w-[90%] md:w-auto m-auto justify-center items-center gap-y-8 gap-x-4 lg:gap-x-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {PricingPlan.map((item, index) => (
                    <div className={`border-t-[30px] md:border-t-[40px] border-b-[20px] border-x-[20px] ${item.Best ? 'border-[#ADFC32]' : 'border-black'} rounded-lg relative bg-black text-white h-full shadow-xl hover:-translate-y-3 hover:shadow-2xl duration-300 ease-in-out`}>
                        {item.Best && (
                            <h2 className='text-xl md:text-2xl text-black absolute top-[-6%] w-[100%] font-Para text-center font-bold flex items-center justify-center'>Most Popular</h2>
                        )}
                        <div className='rounded-3xl p-4 md:p-8'>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4 md:mb-8 font-head'>{item.Name}</h2>
                            <h3 className='text-3xl font-extrabold mb-2 md:mb-6 text-accence font-Para'>
                                ${selected == "Monthly" ? item.Pricing.Monthly : item.Pricing.Yearly} 
                                <span className='font-light text-xl font-Para'>/Monthly</span>
                            </h3>
                            <button
                                className='py-2 px-4 rounded-full font-para mb-10 text-xl font-bold text-white bg-transparent border-2 border-white hover:bg-accence hover:border-[#ADFC32] hover:text-black duration-300 ease-in-out'
                            >
                                {item.BtnText}
                            </button>
                            <div className='flex flex-col gap-3'>
                                {item?.Features?.map((item2, index2) => (
                                    <div className='flex items-center font-Para gap-4 text-lg'>
                                        <FaCheck className='bg-white p-1 rounded-full text-black text-2xl' />
                                        <h4>{item2}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans