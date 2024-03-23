import React from 'react'


const Form = () => {
    return (
        <>
            <div className={`flex flex-col  justify-center items-center rounded-md `} style={{ boxShadow: "1px 1px 7.800000190734863px 0px #00000040" }}>


                <div className={` w-full  m-auto  rounded-lg relative bg-transparent  text-black  shadow-xl p-5  md:p-10`}>

                    <div className='flex flex-col justify-between mb-6  md:mb-2 '>

                        <h2 className={`text-2xl md:text-4xl   font-head text-black `}>Create FAQ Question</h2>

                    </div>
                    <div className='flex flex-col md:flex-row justify-between mb-7 md:mb-4 gap-2 md:gap-16'>
                        <div className='flex flex-col w-full gap-2'>
                            <h2 className='font-Para text-xs sm:text-sm md:text-base text-black font-semibold'>Question:</h2>
                            <input type="text" name="" id="" className='border-2 rounded-md p-1' />
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h2 className='font-Para text-xs sm:text-sm md:text-base text-black font-semibold'>Answer:</h2>
                            <input type="text" name="" id="" className='border-2 rounded-md p-1'  />
                        </div>
                    </div>


                    <button
                        className={`py-2 px-4  rounded-lg w-full font-para  text-xs sm:text-sm md:text-base font-bold bg-[#4DB678] text-white  `}
                    >
                        Add a Question
                    </button>

                </div>
            </div>

        </>
    )
}

export default Form
