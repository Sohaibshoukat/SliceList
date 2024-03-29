import React, { useEffect, useState } from 'react'
import EditForm from '../../Components/Blog/EditForm'
import PreviewBlog from '../../Components/Blog/PreviewBlog';
import { useLocation } from 'react-router-dom';
import { TestimonalData } from '../../Data/Testimonial';
import {BlogData} from '../../Data/BlogData'

const EditBlog = () => {


  const { state } = useLocation();
  const {id} = state ;


  const [Title, setTitle] = useState(null);
  const [Image, setImage] = useState(null)
  const [Date, setDate] = useState(null)

  useEffect(() => {
    BlogData.map((item, index) => {
      if (index == id) {
        setTitle(item.title)
        setImage(item.image)
        setDate(item.date)
      }
    })

  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can process the file here (e.g., upload to a server or display preview)
    setImage(URL.createObjectURL(file));
  };


  return (
    <>
      <div className='flex flex-col lg:py-5 lg:px-6 p-2 lg:flex-row m-5 md:m-10 rounded-2xl shadow-boxshade'>
        <EditForm
          Title={Title}
          setTitle={setTitle}
          Date={Date}
          setDate={setDate}
          handleImageChange={handleImageChange}
          FormHeading = "Edit Form Design"
        />

        <div className='flex-col md:basis-[80%]'>
          <div className='mt-8 mx-4'>
            <button
              className={`py-3 px-10 rounded-3xl mb-4 text-base md:text-xl  bg-black text-white `}
            >
              Preview
            </button>
          </div>
          <PreviewBlog
            Title={Title}
            Image={Image}
            Date={Date}
          />
        </div>
      </div>
    </>
  )
}

export default EditBlog
