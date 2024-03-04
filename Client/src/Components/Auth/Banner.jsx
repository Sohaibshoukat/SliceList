import React from 'react'
import BgBall from "../../assets/Images/image.png"


const Banner = ({Heading}) => {
    return (
        <>
            <div className='flex flex-row items-center justify-center py-20 md:py-36 relative'>
                <img src={BgBall} alt="" className='absolute -z-10 -bottom-[90%] xl:-bottom-[80%] -left-[10%] w-[250px] md:w-[300px] lg:w-auto' />
                <img src={BgBall} alt="" className='rotate-180 absolute -z-10 -top-[60%] -right-[10%] w-[250px]  md:w-[300px] lg:w-auto' />
                <div className='flex flex-col gap-4 md:gap-8 items-center justify-center w-[90%] md:w-auto'>
                    <h1 className='text-primary font-head text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>{Heading}</h1>
                </div>
            </div><small></small>
        </>
    )
}

export default Banner