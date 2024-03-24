import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const BlockUser = () => {
  return (
    <div className='flex lg:p-4 p-2 justify-center'>

      <div className='shadow-md flex p-2 m-2 rounded-md w-[80%]'>

        <div className='inline-flex text-darkgray items-center gap-10'>
          <p>Add Filter</p>
          <FiChevronDown/>
        </div>

        <div className='inline-flex bg-[#FCFAFA] px-2'>
        <input type='text' placeholder='Search by name or email' className='w-full'>
        </input>
        </div>
      </div>

      
    </div>
  )
}

export default BlockUser