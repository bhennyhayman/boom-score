import React from 'react'
import useAuth from '../context/useAuth'
import { MdClose } from 'react-icons/md'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  const {setOpenBar} = useAuth();

  return (
    <div className='fixed top-0 h-screen bg-teal-500 w-70 text-white'>
      
      <div className=' flex justify-between items-center-last mt-5'>
        <div className='ml-5 text-2xl '>BoomScore</div>
        <div className='mr-9 cursor-pointer bg-white px-2 py-2 text-black rounded-full' onClick={()=>setOpenBar(false)}><MdClose size={20}/></div>
      </div>
      <hr className='mt-5 text-teal-600'/>

      <div className="sideLinks text-[18px] py-3">
        <div className='sideLink'><NavLink to={'/'}>Home</NavLink></div>
        <div className='sideLink'><NavLink to={'/matches'}>Today Matches</NavLink></div>
        <div className='sideLink'><NavLink to={'/predictions'}>Betting Odds</NavLink></div>
        <div className='sideLink'><NavLink to={'/contact'}>Contact</NavLink></div>
        <div className='sideLink'><NavLink to={'/about'}>About </NavLink></div>
        <div className='sideLink'><NavLink to={'/matches'}>Faqs</NavLink></div>
      </div>
      
      
    </div>
  )
}

export default SideBar