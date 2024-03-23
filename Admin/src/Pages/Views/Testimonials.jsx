import React, { useState } from 'react';
import Testimonial from '../../Components/Testimonials/Testimonial'
import { MdDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";


const Testimonials = () => {

  const [selectedTestimonial, setSelectedTestimonial] = useState(false);

  // Function to handle selecting a testimonial
  const handleSelectTestimonial = (selectedTestimonial) => {
    setSelectedTestimonial(!selectedTestimonial);
    console.log("It is working")
  };

  
  return (
    <div className='md:flex lg:p-4 p-2 shadow-md m-2'>

      <div className='md:w-[80%] mx-4' onClick={handleSelectTestimonial}>
        <Testimonial author="Wiliam Kollas" position="Founder@Company" content="Lorem ipsum dolor sit amet consectetur. Platea phasellus sed congue placerat. Quis cursus gravida malesuada et consectetur diam. Malesuada pellentesque eget turpis tortor facilisi sit tincidunt arcu. Odio ipsum ut scelerisque imperdiet pharetra augue sed non." title="GREAT APP THAT SAVE MONEY" rating="3" onClick = {handleSelectTestimonial}/>
        <Testimonial author="Wiliam Kollas" position="Founder@Company" content="Lorem ipsum dolor sit amet consectetur. Platea phasellus sed congue placerat. Quis cursus gravida malesuada et consectetur diam. Malesuada pellentesque eget turpis tortor facilisi sit tincidunt arcu. Odio ipsum ut scelerisque imperdiet pharetra augue sed non." title="GREAT APP THAT SAVE MONEY" rating="3"/>
        <Testimonial author="Wiliam Kollas" position="Founder@Company" content="Lorem ipsum dolor sit amet consectetur. Platea phasellus sed congue placerat. Quis cursus gravida malesuada et consectetur diam. Malesuada pellentesque eget turpis tortor facilisi sit tincidunt arcu. Odio ipsum ut scelerisque imperdiet pharetra augue sed non." title="GREAT APP THAT SAVE MONEY" rating="3"/>
      </div>

      <div className='flex-col p-4 md:border-l md:border-darkgray'>
  
        <div className='round bg-yellow inline-flex items-center m-auto lg:px-8 py-3 px-2 rounded-3xl hover:bg-[#E4A138]'>
          <div className='text-secondary font-bold mx-2 '>Add New</div>
          <FaPlusCircle className='text-secondary text-lg'/>
        </div>

        {selectedTestimonial && (
        <div>
        <div className='text-darkgray flex items-center m-2 font-bold hover:text-gray-500'>
          <MdOutlineModeEdit className='text-lg mx-2'/>
          Edit
        </div>
        <div className=' text-darkgray flex items-center m-2 font-bold hover:text-gray-500'>
          <MdDelete className='text-red text-xl mx-2'/>
          Delete
        </div>
        </div>
        )
        }
      </div>

    </div>



  )
}

export default Testimonials