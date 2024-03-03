import React from 'react'

const BlogsCard = ({ item }) => {
    return (
        <div className='flex flex-col bg-white'
        style={{boxShadow: "1px 1px 7.099999904632568px 0px #00000040"}}>
            <div className='basis-[55%]'>
                <img src={item.Image} alt="" className='w-[100%]' />
            </div>
            <div className='basis-[40%] py-4 px-8'>
                <h3 className='font-Para text-xl font-light mb-4'>{item.Date}</h3>
                <h2 className='font-head text-3xl font-bold'>{item.Name}</h2>
                <button className='bg-black py-2 px-4 font-Para text-xl text-white hover:bg-accence hover:text-black rounded-lg duration-300 ease-in-out mt-8'>Read More</button>
            </div>
        </div>
    )
}

export default BlogsCard