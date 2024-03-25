import React, { useEffect, useState } from 'react'
import EditForm from '../../Components/IntegrationGuide/EditForm'
import PreviewCard from '../../Components/IntegrationGuide/PreviewCard';
import { useLocation } from 'react-router-dom';
import { TestimonalData } from '../../Data/Testimonial';


const CreateIntegrationGuides = () => {

    const { state } = useLocation();
    const id = state ? state.id : null;


    const [title, setTitle] = useState("");
    const [description, setdescription] = useState('')
    const [Image, setImage] = useState('')

    useEffect(() => {
        TestimonalData.map((item, index) => {
            if (index == id) {
                setTitle(item.heading)
                setImage(item.image)
                setdescription(item.desc)
            }
        })

    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // You can process the file here (e.g., upload to a server or display preview)
        setImage(URL.createObjectURL(file));
      };    

    return (
        <div className='flex flex-col lg:py-5 lg:px-6 p-2 lg:flex-row m-5 md:m-10 rounded-2xl shadow-boxshade'>
    <EditForm
      title={title}
      setTitle={setTitle}
      description={description}
      setdescription={setdescription}
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
      <PreviewCard
        content={description}
        title={title}
        Image={Image}
      />
    </div>
  </div>
    )
}

export default CreateIntegrationGuides
