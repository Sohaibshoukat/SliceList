import React from 'react';

const Blog = ({ title, date, image}) => {
    return (

        <div
        className="bg-white flex lg:flex-row flex-col w-[100%] p-4 mx-auto mt-2 mb-6 lg:items-center rounded-md"
        style={{
          boxShadow: '1px 0px 27.299999237060547px -3px rgba(0, 0, 0, 0.4)',
          transition: 'box-shadow 0.3s ease-in-out', 
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '2px 0px 32.299999237060547px -5px rgba(0, 0, 0, 1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '1px 0px 27.299999237060547px -3px rgba(0, 0, 0, 0.4)';
        }}
      >
        
        <div className='xl:w-[20%] w-[100%]'>
          <img className='rounded-md w-[100%] h-[15vh] lg:h-[10%] object-cover' src={image} style={{ objectPosition: 'top' }} />
        </div>
               
       
        <div className=' hidden lg:block flex-col mx-2 basis-[80%]'>
        <h1 className="text-2xl font-bold mx-2 text-primary mb-10 w-[80%] uppercase">{title}</h1>

        
        <div className='flex justify-between mx-2 pr-8'>
            <div className='text-xl font-medium  my-1 '>{date}</div>
            <div className='bg-black text-center text-secondary w-40 py-2 px-4 rounded-md lg:text-lg text-sm my-1 hover:bg-gray-800'>Read me</div>
        </div>
        </div>
        
        


        
        <div className='flex-col gap-4 sm:block md:block lg:hidden xl:hidden mt-2'>
        <div className=' text-base md:text-lg my-1'>{date}</div>
        <h1 className="text-base md:text-lg font-bold text-primary uppercase">{title}</h1>
        <div className='flex justify-end '>
        <div className='bg-black text-center text-secondary w-20 md:w-28 py-2 px-2 rounded-md lg:text-lg text-sm mt-2 hover:bg-gray-800'>Read me</div>
        </div>
        
        </div>
        
        </div>
     
                

    );
};

export default Blog;
