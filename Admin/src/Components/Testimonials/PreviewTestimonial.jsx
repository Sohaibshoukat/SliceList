import React from 'react';
import Rating from '@mui/material/Rating';



const PreviewTestimonial = ({ title, content, author, position,rating,company}) => {
    return (
            <div className='bg-[url(/assets/bgImage.png)] lg:p-10 p-4 lg:m-4 m-2'>
        
            <div className=" p-2 md:p-6 w-[100%] mx-auto my-2 bg-white flex-col items-center ">

                <div className="flex justify-between items-center">

                <Rating
                    name="read-only"
                    value={rating}
                    readOnly
                    className='my-5'
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#ADFC32', // Custom color 
                        }
                    }}
                />

                </div>

                <div className='my-2 mx-2'>

                    <h2 className="lg:text-lg text-base  font-bold text-primary">{title}</h2>
                    <p className="text-gray-500 my-2 lg:text-base text-sm">{content}</p>

                </div>
                
                <div className='inline-flex'>
                        <img className="h-8 md:h-10 sm:h-6 px-2 m-auto" src="/assets/ImageHolder.png" />
                        <div className='flex-col m-auto p-2 md:p-6'>
                            <div className="sm:text-sm md:text-lg lg:text-xl text-xs font-medium text-primary">{author}</div>
                            <p className="sm:text-xs md:text-sm lg:text-lg text-xs text-gray-500">{position}@{company}</p>
                        </div>

                    </div>

            </div >
            </div>
    );
};

export default PreviewTestimonial;
