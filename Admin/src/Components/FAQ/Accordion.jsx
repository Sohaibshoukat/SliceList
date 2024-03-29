import React, { useState } from 'react'
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FAQData } from '../../Data/FAQdata'

const Accordion = () => {


    const [currenttab, setcurrenttab] = useState(null)


    return (
        <>
            <div className=" flex flex-col  px-3 md:px-6 py-4">
                {FAQData.map((item, index) => (
                    <div
                        className={`
             flex flex-col  ${currenttab == index ? 'bg-black text-[#ADFC32]' : 'bg-white text-black'}
             rounded-md my-2 py-2 px-5 cursor-pointer 
             ease-in-out duration-300 
          `}
                        style={{ boxShadow: "1px 1px 7.800000190734863px 0px #00000040" }}
                        key={index}
                    >
                        <div
                            className={`text-left flex flex-row  justify-between items-center text-base md:text-xl xl:text-2xl font-semibold `}
                            onClick={() => {
                                if (currenttab === index) {
                                    setcurrenttab(null);
                                } else {
                                    setcurrenttab(index);
                                }
                            }}
                        >
                            <div className={`flex gap-x-4 items-center  `}>
                                <HiQuestionMarkCircle />
                                <h2 className='font-Para text-xs sm:text-sm md:text-lg font-semibold'>{item.Question}</h2>
                            </div>
                            {currenttab !== index ? <FaPlus className='text-xs md:text-base' /> : <FaMinus className='text-xs md:text-base' />}
                        </div>
                        <div className={`${currenttab !== index ? 'hidden' : 'block'} text-xs sm:text-sm md:text-lg font-Para text-white text-justify font-normal pt-2 xl:pt-4 px-2 md:px-4 ease-in-out duration-300`}>
                            {currenttab === index && <p>
                                {item.Answer}
                            </p>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Accordion
