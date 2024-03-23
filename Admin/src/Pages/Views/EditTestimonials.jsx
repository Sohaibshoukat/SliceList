import React, { useState } from 'react'
import EditForm from '../../Components/Testimonials/EditForm';
import PreviewTestimonial from '../../Components/Testimonials/PreviewTestimonial';

const EditTestimonials = () => {
  const [title, setTitle] = useState("");

  return (

    
    // Editing
    <div className='flex flex-col lg:flex-row m-4 shadow-lg'>
      <EditForm title={title} setTitle={setTitle}/>
      <div className='flex-col md:basis-[80%]'>
      <div className='mt-8 mx-4'>
            <button
              className={`py-3 px-10 rounded-3xl mb-4 text-base md:text-xl  bg-black text-white `}
            >
              Preview
            </button>
        </div>
      <PreviewTestimonial  author="Wiliam Kollas" position="Founder" content="Lorem ipsum dolor sit amet consectetur. Platea phasellus sed congue placerat. Quis cursus gravida malesuada et consectetur diam. Malesuada pellentesque eget turpis tortor facilisi sit tincidunt arcu. Odio ipsum ut scelerisque imperdiet pharetra augue sed non." title={title} rating="2" company="Google" />
    </div>
    </div>

  )
}

export default EditTestimonials;