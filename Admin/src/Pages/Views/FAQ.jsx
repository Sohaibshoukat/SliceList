import React from 'react'
import Accordion from '../../Components/FAQ/Accordion'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Form from '../../Components/FAQ/Form';


const FAQ = () => {




  return (
    <>

        <Accordion />
        <div className="relative flex flex-col pb-6 px-3 md:px-6 ">
          <button
            className={`py-2 px-4  rounded-lg w-full font-para text-xs sm:text-sm md:text-base font-bold bg-[#4DB678] text-white  `}
          >
            + Add a Question
          </button>
          {/* <FaPlus className=' absolute top-[10px] left-[485px] text-base text-white' /> */}
        </div>
        <div className=" flex flex-col px-3 md:px-6 ">
          <Form />
        </div>

    </>
  )
}

export default FAQ