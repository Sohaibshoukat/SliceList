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
                                            <div className="relative md:basis-[40%] rounded-xl">
                                                <img src={item.Image} alt="" className='relative w-[100%] h-[100%] rounded-xl' />
                                                <img src={item.Image2} alt="" className={`absolute floatanimation w-[40%] top-10 left-44 md:top-16 md:left-48  lg:top-20 lg:left-64 rounded-xl ${item.TwoImages ? "block" : "hidden"}`} />
                                                <img src={item.Image3} alt="" className={`absolute floatanimation w-[50%] -top-6 -left-10 md:-top-6 md:-left-10  lg:-top-6 lg:-left-10 rounded-xl ${item.ThreeImages ? "block" : "hidden"}`} />
                                                <img src={item.Image4} alt="" className={`absolute floatanimation w-[25%] top-32 left-80 md:top-28 md:left-64  lg:top-32 lg:left-80 rounded-xl ${item.ThreeImages ? "block" : "hidden"}`} />
                                            </div>
                                            <div className='flex text-left flex-col gap-y-2 md:basis-[60%]'>
                                                <h1 className='text-3xl tracking-wide font-bold font-Para'>{item.Heading}</h1>
                                                <p className='text-xl font-normal mb-4 font-Para text-justify'>{item.Para}</p>
                                                {/* <div className='flex flex-col gap-4'>
                                                    {item.Feature.map((item2, index2) => (
                                                        <div className='' key={index2}>
                                                            <p className='text-lg font-normal text-black font-Para'><span className='font-bold'>{item2.question}:</span> {item2.answer}</p>
                                                        </div>
                                                    ))}
                                                </div> */}
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='flex text-left flex-col gap-y-2 md:basis-[60%]'>
                                                <h1 className='text-3xl tracking-wide font-bold font-Para'>{item.Heading}</h1>
                                                <p className='text-xl font-normal mb-4 font-Para text-justify'>{item.Para}</p>
                                                {/* <div className='flex flex-col gap-4'>
                                                    {item.Feature.map((item2, index2) => (
                                                        <div className='' key={index2}>
                                                            <p className='text-lg font-normal text-black font-Para'><span className='font-bold'>{item2.question}:</span> {item2.answer}</p>
                                                        </div>
                                                    ))}
                                                </div> */}
                                            </div>
                                            <div className=" md:basis-[40%] rounded-xl">
                                                <img src={item.Image} alt="" className='w-[100%] h-[100%] rounded-xl' />

                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="md:hidden  flex flex-col justify-between gap-10 items-center">
                                    <div className="relative rounded-xl">
                                        <img src={item.Image} alt="" className='w-full rounded-xl' />
                                        <div className='absolute top-20 left-48 xxs:top-20 xxs:left-56 xs:top-28 xs:left-72 sm:top-32 sm:left-80 w-[40%] floatanimation   rounded-xl'>
                                            <img src={item.Image2} alt="" className={`  ${item.TwoImages ? "block" : "hidden"}`} />
                                        </div>
                                        <img src={item.Image3} alt="" className={`absolute floatanimation w-[50%] -top-6 -left-2 xxs:-top-4 xxs:-left-2 xs:-top-6 xs:-left-5 sm:-top-6 sm:-left-10 md:-top-6 md:-left-10  lg:-top-6 lg:-left-10 rounded-xl ${item.ThreeImages ? "block" : "hidden"}`} />
                                        <img src={item.Image4} alt="" className={`absolute floatanimation w-[25%] top-24 left-[80%] xxs:top-24 xxs:left-[80%] xs:top-32 xs:left-[80%] sm:top-32 sm:left-[85%] md:top-28 md:left-64  lg:top-32 lg:left-80 rounded-xl ${item.ThreeImages ? "block" : "hidden"}`} />
                                    </div>
                                    <div className='flex text-left flex-col gap-y-2 md:basis-[50%]'>
                                        <h1 className='text-2xl tracking-wide font-bold font-Para'>{item.Heading}</h1>
                                        <p className=' text-md md:text-lg lg:text-xl font-normal mb-4 font-Para'>{item.Para}</p>
                                        {/* <div className='flex flex-col gap-4'>
                                            {item.Feature.map((item2, index2) => (
                                                <div className='' key={index2}>
                                                    <p className='text-lg font-normal text-black font-Para'><span className='font-bold'>{item2.question}:</span> {item2.answer}</p>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center py-10 md:pt-24'>
                        <button className='bg-black text-white font-Para rounded-lg px-6 py-4 text-xl font-semibold text-center hover:bg-accence hover:text-black duration-300 ease-in-out'>Start Your Free Trial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why