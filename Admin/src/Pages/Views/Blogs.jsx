import React, { useState } from 'react'
import Blog from '../../Components/Blog/Blog';
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { BlogData } from '..//../Data/BlogData.js';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {

  const [Selected, setSelected] = useState(false)
  const [ID, setID] = useState(false)
  const navigate = useNavigate()


  return (
    <div className='flex flex-col-reverse xl:flex-row lg:py-10 p-2 m-5 md:m-10 rounded-2xl shadow-boxshade '>

      <div className='lg:w-[80%] mx-4 overflow-y-auto lg:px-4 px-2'>
        {BlogData.map((blog, index) => (
          <div onClick={() => {
            setSelected(true)
            setID(index)
          }}>
            <Blog
              key={index}
              title={blog.title}
              date={blog.date}
              image={blog.image}
              IDSelected={ID}
              IDindex={index}
              
            />
          </div>
        ))}
      </div>

      <div className='flex-col mx-auto p-4 xl:border-l md:w-[40%] xl:w-[20%] md:border-darkgray'>
        <div className='bg-[#4DB678] flex justify-between items-center rounded-3xl pl-3 md:pl-5 pr-2 h-19  hover:bg-[#2d6f49] my-4 gap-2' onClick={() => {
          navigate('/admin-dashboard/create-blogs')
        }}>
          <div className='text-secondary font-bold lg:text-base  sm:text-sm my-3 ml-4'>Ceate New</div>
          <IoMdAdd className='text-secondary font-bold sm md:text-lg  p-2 my-1 bg-[#2A6B45] rounded-full h-full w-8 md:w-10' />
        </div>
        <div className={`${Selected ? "block" : "hidden"}`}>
          <div className='bg-[#285F86] flex justify-between items-center rounded-3xl pl-3 md:pl-5 pr-2 h-19  hover:bg-[#30546c] my-4 gap-2' onClick={() => {
            navigate('/admin-dashboard/edit-blogs', { state: { id: ID } })
          }}>
            <div className='text-secondary font-bold lg:text-base sm:text-sm my-3 ml-4'>Edit</div>
            <MdOutlineModeEdit className='text-secondary font-bold sm md:text-lg  p-2 my-1 bg-[#1C95EB] rounded-full h-full w-8 md:w-10' />
          </div>
          <div className=' text-[#979797] flex items-center m-2 font-bold hover:text-gray-600'>
            <MdDelete className='text-red text-xl mx-2' />
            Delete
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs