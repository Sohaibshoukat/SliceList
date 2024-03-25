import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
import BlockUserData from '../../Components/Users/BlockUser';

const BlockUser = () => {
  return (
    <div className='bg-gray-100/50 w-100% min-h-[100vh]'>
      <div className="w-[95%] lg:w-[95%] m-auto py-10">
        <BlockUserData/>
      </div>
    </div>
  )
}

export default BlockUser