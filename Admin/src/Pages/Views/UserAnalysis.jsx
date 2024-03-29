import React, { useState } from 'react'
import UserData from '../../Components/Users/UserData'
import SelectedUser from '../../Components/Users/SelectedUser'

const UserAnalysis = () => {
  const [selectedItem, setselectedItem] = useState(0)
  return (
    <div className='bg-gray-100/50 w-100% min-h-[100vh]'>
    <div className="w-[95%] lg:w-[95%] m-auto py-10">
      <div className="flex flex-row gap-6">
        <div className="lg:basis-[70%] w-[100%]">
          <UserData selectedItem={selectedItem} setselectedItem={setselectedItem}/>
        </div>
        <div className="hidden lg:block basis-[30%]">
          <SelectedUser selectedItem={selectedItem} setselectedItem={setselectedItem}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserAnalysis