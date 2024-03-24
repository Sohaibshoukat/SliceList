import React, { useState } from 'react'
import EditForm from '../../Components/Testimonials/EditForm';
import PreviewTestimonial from '../../Components/Testimonials/PreviewTestimonial';

const CreateTestimonials = () => {
  const [title, setTitle] = useState("");
  const [Name, setName] = useState('');
  const [description, setdescription] = useState('')
  const [Company, setCompany] = useState('');
  const [position, setposition] = useState('');
  const [rating, setrating] = useState('')
  const [Image, setImage] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can process the file here (e.g., upload to a server or display preview)
    setImage(URL.createObjectURL(file));
  };

  return (


    // Editing
    <div className='flex flex-col lg:py-5 lg:px-6 p-2 lg:flex-row m-5 md:m-10 rounded-2xl shadow-boxshade'>
      <EditForm
        title={title}
        setTitle={setTitle}
        Name={Name}
        setName={setName}
        description={description}
        setdescription={setdescription}
        Company={Company}
        setCompany={setCompany}
        position={position}
        setposition={setposition}
        rating={rating}
        setrating={setrating}
        Image={Image}
        setImage={setImage}
        handleImageChange={handleImageChange}
      />

      <div className='flex-col md:basis-[80%]'>
        <div className='mt-8 mx-4'>
          <button
            className={`py-3 px-10 rounded-3xl mb-4 text-base md:text-xl  bg-black text-white `}
          >
            Preview
          </button>
        </div>
        <PreviewTestimonial
          author={Name}
          position={position}
          company={Company}
          content={description}
          title={title}
          rating={rating}
          Image={Image}
        />
      </div>
    </div>

  )
}

export default CreateTestimonials;