import React from 'react'
import useAuth from '../context/useAuth'
import { MdClose } from 'react-icons/md'

const SideBar = () => {
  const {setOpenBar} = useAuth();

  return (
    <div className='fixed top-0 h-screen bg-teal-500 w-70'>
      
      <div className='text-white flex justify-between items-center-last mt-5'>
        <div className='ml-5 text-2xl'>BoomScore</div>
        <div className='mr-9 cursor-pointer bg-white px-2 py-2 text-black rounded-full' onClick={()=>setOpenBar(false)}><MdClose size={20}/></div>
      </div>
      
    </div>
  )
}

export default SideBar