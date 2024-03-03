import React from 'react'
import { WhyUs } from '../../Data/Whatyougot'
import BgBall from "../../assets/Images/image.png"

const Why = () => {
    return (
        <div className='relative'>
            <img src={BgBall} alt="" className='rotate-180 absolute -z-10 top-[30%] -right-[10%] w-[250px]  md:w-[300px] lg:w-auto' />
            <div className='w-[90%] md:w-[90%] xl:w-[80%] m-auto relative'>
                <div className="py-8 md:py-16">
                    <div className='flex flex-col gap-10'>
                        {WhyUs.map((item, index) => (
                            <>
                                <div className="hidden  md:flex flex-row justify-between gap-16 items-center">
                                    {index % 2 == 0 ?
                                        <>
                                            <div className="bg-black md:basis-[50%] rounded-xl">
                                                <img src={item.Image} alt="" className='w-[100%] h-[100%] rounded-xl' />
                                            </div>
                                            <div className='flex text-left flex-col gap-y-2 md:basis-[50%]'>
                                                <h1 className='text-4xl tracking-wide font-bold font-head'>{item.Heading}</h1>
                                                <p className='text-xl font-normal mb-4 font-Para'>{item.Para}</p>
                                                <div className='flex flex-col gap-4'>
                                                    {item.Feature.map((item2, index2) => (
                                                        <div className='' key={index2}>
                                                            <p className='text-lg font-normal text-black font-Para'><span className='font-bold'>{item2.question}:</span> {item2.answer}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='flex text-left flex-col gap-y-2 md:basis-[50%]'>
                                                <h1 className='text-4xl tracking-wide font-bold font-head'>{item.Heading}</h1>
                                                <p className='text-xl font-normal mb-4 font-Para'>{item.Para}</p>
                                                <div className='flex flex-col gap-4'>
                                                    {item.Feature.map((item2, index2) => (
                                                        <div className='' key={index2}>
                                                            <p className='text-lg font-normal text-black font-Para'><span className='font-bold'>{item2.question}:</span> {item2.answer}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-black md:basis-[50%] rounded-xl">
                                                <img src={item.Image} alt="" className='w-[100%] h-[100%] rounded-xl' />

                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="md:hidden  flex flex-col justify-between gap-10 items-center">
                                    <div className="bg-black rounded-xl">
                                        <img src={item.Image} alt="" className='w-[100%] h-[100%] rounded-xl' />
                                    </div>
                                    <div className='flex text-left flex-col gap-y-2 md:basis-[50%]'>
                                        <h1 className='text-4xl tracking-wide font-bold font-head'>{item.Heading}</h1>
                                        <p className='text-xl font-normal mb-4 font-Para'>{item.Para}</p>
                                        <div className='flex flex-col gap-4'>
                                            {item.Feature.map((item2, index2) => (
                                                <div className='' key={index2}>
                                                    <p className='text-lg font-normal text-black font-Para'><span className='font-bold'>{item2.question}:</span> {item2.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center py-8 md:py-16'>
                        <button className='bg-black text-white font-Para rounded-lg px-4 py-2 text-xl font-semibold text-center hover:bg-accence hover:text-black duration-300 ease-in-out'>Start Your Free Trial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why