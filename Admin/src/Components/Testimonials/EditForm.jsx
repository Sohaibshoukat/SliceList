import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import Rating from '@mui/material/Rating';

const EditForm = ({title,setTitle,description,name,rating}) => {
  return (
    <div className="container mx-auto p-4 text-[#4F4F4F]">
      <h2 className="text-xl font-bold mb-4 ">TESTIMONIALS</h2>
      <form>
        <div className="mb-2">
          <label htmlFor="title" className="text-lg font-bold text-[#8A8A8A] ">
            Title:
          </label>
          <input
            type="text"
            value = {title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className={`py-3 px-4 rounded-lg w-full font-para mt-4 text-base md:text-xl border border-darkgray  text-darkgray hover:text-gray-500 hover:border-[#ADFC32]  duration-300 ease-in-out`}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="description" className="text-lg font-bold text-[#8A8A8A] ">
            Meta Description:
          </label>
          <input
            type="text"
            placeholder={description}
            className={`py-3 px-4 rounded-lg w-full font-para mt-4 text-base md:text-xl border border-darkgray  text-darkgray hover:text-gray-500 hover:border-[#ADFC32]  duration-300 ease-in-out`}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="profile-image" className="text-lg font-bold text-[#8A8A8A]">
            Profile Image:
          </label>
          <div className="flex items-center mt-4">
            <input
              type="file"
              id="profile-image"
              className="hidden"
              onChange={(e) => console.log(e.target.files)}
            />
            <label
              htmlFor="profile-image"
              className=" flex items-center justify-center py-3 px-4 rounded-lg w-full font-para text-base md:text-lg border border-darkgray hover:border-[#ADFC32] text-darkgray hover:text-gray-500 duration-300 ease-in-out cursor-pointer"
            >
              <CiCirclePlus className='mx-2 text-lg' />
              Import From Computer
            </label>
          </div>
        </div>


        <div className="mb-2">
          <label htmlFor="name" className="text-lg font-bold text-[#8A8A8A] ">
            Name:
          </label>
          <input
            type="text"
            placeholder={name}
            className={`py-3 px-4 rounded-lg w-full font-para mt-4 text-base md:text-xl border border-darkgray  text-darkgray hover:text-gray-500  hover:border-[#ADFC32] hover:text-white duration-300 ease-in-out`}
          />
        </div>


        <div className="mb-2 flex-col">
          <label htmlFor="rating" className="text-lg font-bold text-[#8A8A8A] ">
            Rating:
          </label>
         
          <div className="flex items-center justify-center text-darkgray">
             <Rating
                    name="edit"
                    className='my-5'
                    value = {rating}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#ADFC32', // Custom color 
                        }
                    }}
                />
                </div>
          
        </div>


        <div className='mt-8 flex-col '>
          <div className='flex justify-center'>
            <button
              className={`w-full md:w-auto py-3 px-10 md:rounded-3xl mb-4 text-base md:text-xl bg-[#4DB678] hover:bg-[#419e5d] text-white duration-300 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
