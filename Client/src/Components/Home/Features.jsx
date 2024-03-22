import React from 'react'
import { TestimonalData } from '../../Data/Testimonial'
import { FeaturesData } from '../../Data/Feature'

const Features = () => {
    return (
        <div className="w-[100%] md:w-[90%] xl:w-[80%] m-auto my-20">
            <h1 className='text-4xl md:text-4xl font-head lg:text-5xl font-bold text-center md:max-w-[70%] m-auto mb-10 lg:mb-20 xl:mb-20'>features we pr0vide</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] md:w-[90%] lg:w-auto m-auto">
                {FeaturesData.map((item, index) => (
                    <div 
                        className='bg-white hover:bg-accence  group duration-300 ease-in-out cursor-pointer w-[100%] py-5 px-4 md:py-10 md:px-10 lg:py-10 lg:px-10 m-auto shadow-lg flex items-center flex-col rounded-xl' key={index}
                    style={{boxShadow: "1px 1px 7.099999904632568px 0px #00000040"}}
                    >
                        <div className='bg-accence p-3 group-hover:bg-black group-hover:text-white rounded-full inline-block mb-6 ease-in-out duration-300'>
                            <item.Icon className='text-black group-hover:text-white text-4xl ease-in-out duration-300' />
                        </div>
                        <h1 className='text-black text-2xl text-center lg:text-3xl xl:text-4xl font-bold mb-2 font-head'>{item.heading}</h1>
                        <p className='text-black  tracking-tighter text-lg lg:text-lg text-center'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features