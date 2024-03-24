import React, { useState } from 'react';
import Testimonial from '../../Components/Testimonials/Testimonial'
import { MdDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { TestimonalData } from '../../Data/Testimonial';


const Testimonials = () => {

  const [selectedTestimonial, setSelectedTestimonial] = useState(false);
  const [SelectedId, setSelectedId] = useState(null)

  // Function to handle selecting a testimonial
  const handleSelectTestimonial = (selectedTestimonial) => {
    setSelectedTestimonial(!selectedTestimonial);
    console.log("It is working")
  };


  return (
    <div className='md:flex lg:py-10 p-2 m-10 rounded-2xl shadow-boxshade'>
      <div className='md:w-[80%] mx-4 flex flex-col gap-10' >
        {TestimonalData.map((item, index) => (
          <Testimonial
            author={item.name}
            position={item.position}
            company={item.company}
            content={item.desc}
            title={item.heading}
            rating={item.rating}
            Image={item.image}
            key={index}
            onClick={() => {
              setSelectedId(index)
              setSelectedTestimonial(true)
            }}

          />
        ))}
      </div>

      <div className='flex-col p-4 md:border-l md:border-darkgray'>

        <div className='round bg-yellow inline-flex items-center m-auto lg:px-8 py-3 px-2 rounded-3xl hover:bg-[#E4A138]'>
          <div className='text-secondary font-bold mx-2 '>Add New</div>
          <FaPlusCircle className='text-secondary text-lg' />
        </div>

        <div className={`${selectedTestimonial ? 'block' : 'hidden'}`}>
          <div className='text-darkgray flex items-center m-2 font-bold hover:text-gray-500'>
            <MdOutlineModeEdit className='text-lg mx-2' />
            Edit
          </div>
          <div className=' text-darkgray flex items-center m-2 font-bold hover:text-gray-500'>
            <MdDelete className='text-red text-xl mx-2' />
            Delete
          </div>
        </div>
      </div>

    </div>



  )
}

export default Testimonials