import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Cards from '../../Components/IntegrationGuide/Cards.jsx';
import { cardsData } from '../../Data/CardsData.js';

const IntegrationGuides = () => {

  const navigate = useNavigate()
  const [Selected, setSelected] = useState(null)
  const [ID, setID] = useState(null)


  return (
    <>
      <div className='flex flex-col-reverse xl:flex-row lg:py-10 p-2 m-5 md:m-10 rounded-2xl shadow-boxshade ' >

        <div className='lg:w-[80%]  overflow-y-auto mx-auto lg:px-4 px-2'>
          <div className='pb-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {cardsData.map((card, index) => (
                <div onClick={() => {
                  setSelected(true)
                  setID(index)
                }}
                  key={index}
                >
                  <Cards  cardData={card} SelectedID={ID} IDIndex={index}/>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className='flex-col mx-auto p-4 xl:border-l md:w-[40%] xl:w-[20%] md:border-darkgray'>
          <div className='bg-[#4DB678] flex justify-between items-center rounded-3xl pl-5 pr-2 h-19  hover:bg-[#2d6f49] my-4' onClick={() => {
            navigate('/admin-dashboard/create-integration-guides')
          }}>
            <div className='text-secondary font-bold lg:text-base text-xl sm:text-sm my-3 ml-4'>Ceate New</div>
            <IoMdAdd className='text-secondary font-bold md:text-lg text-xl p-2 my-1 bg-[#2A6B45] rounded-full h-full w-10' />
          </div>
          <div className={`  ${Selected ? "block" : "hidden"}`}>
            <div className={`bg-[#285F86] flex justify-between items-center rounded-3xl pl-5 pr-2 h-19  hover:bg-[#30546c] my-4 `} onClick={() => {
              navigate('/admin-dashboard/edit-integration-guides', { state: { id: ID } })
            }}>
              <div className='text-secondary font-bold lg:text-base text-xl sm:text-sm my-3 ml-4'>Edit</div>
              <MdOutlineModeEdit className='text-secondary font-bold md:text-lg text-xl p-2 my-1  bg-[#1C95EB] rounded-full h-full w-10' />
            </div>
            <div className=' text-[#979797] flex items-center m-2 font-bold hover:text-gray-600'>
              <MdDelete className='text-red text-xl mx-2' />
              Delete
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default IntegrationGuides
