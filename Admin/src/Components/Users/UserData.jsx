import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { UserDataList } from '../../Data/UserData'

const UserData = ({ selectedItem, setselectedItem }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className='flex flex-row gap-10 font-Para bg-white rounded-xl text-lg shadow-2xl'>
                    <select name="" id="" className='basis-[15%] active:outline-none rounded-xl py-4 px-6'>
                        <option value="">Add Filter</option>
                        <option value="Basic">Basic Plan</option>
                        <option value="Advance">Advance Plan</option>
                        <option value="Pro">Pro Plan</option>
                    </select>
                    <div className='relative flex rounded-xl flex-row gap-4 items-center  bg-white basis[85%] w-[100%]'>
                        <IoSearch className='' />
                        <input type="text" placeholder='Search' className='py-4 rounded-xl active:outline-none w-[100%] outline-none' />
                    </div>
                </div>

                <div className="my-4 w-[100%] font-Para">
                    <table className='w-[100%]'>
                        {/* <thead> */}
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Plan</th>
                            <th>Gender</th>
                            <th>Lifetime Spent</th>
                            <th>Action</th>
                        </tr>
                        {/* </thead> */}
                        {/* <tbody className='flex flex-col gap-4'> */}
                        {UserDataList.map((item, index) => (
                            <tr key={index}>
                                <td className='gap-2'>
                                    <img src={'../assets/user.png'} alt="" className='w-[25px] h-[25px] rounded-lg' />
                                    <h3>{item.Name}</h3>
                                </td>
                                <td>{item.ID}</td>
                                <td>$200</td>
                                <td>{item.Plan}</td>
                                <td>{item.Gender}</td>
                                <td>{item['Lifetime Spent']}</td>
                                <td>
                                    <button>
                                        Block
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {/* </tbody> */}
                    </table>
                </div>

            </div>
        </>
    )
}

export default UserData