import React from 'react'
import { BlogsData } from '../../Data/Blogs'
import BlogsCard from '../BlogsCard'

const Blogs = () => {
    return (
        <>
            <div className="w-[100%] md:w-[90%] xl:w-[80%] m-auto my-20">
                <h1 className='text-3xl md:text-4xl font-head lg:text-5xl font-bold text-center md:max-w-[70%] m-auto lg:mb-20 xl:mb-20'>our latest <br/> blogs</h1>
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {BlogsData.map((item, index) => (
                        <BlogsCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blogs