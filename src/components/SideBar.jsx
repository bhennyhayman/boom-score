import React from 'react'
import useAuth from '../context/useAuth'
import { MdClose } from 'react-icons/md'
import {NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'

const SideBar = () => {
  const {openBar,setOpenBar,userInfo} = useAuth();
  const role = userInfo.role;

  return (
    <motion.div 
      initial={{ width: 0 }} 
      animate={{ width: openBar ? 250 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    className='fixed top-0 h-svh overflow-y-auto bg-teal-500 w-70 text-white'>
      
      <div className=' flex justify-between items-center-last mt-5'>
        <div className='ml-5 text-2xl '>BoomScore</div>
        <div className='mr-9 cursor-pointer bg-white px-2 py-2 text-black rounded-full' onClick={()=>setOpenBar(false)}><MdClose size={20}/></div>
      </div>
      <hr className='mt-5 text-teal-600'/>

      <div className="sideLinks text-[18px] py-3">
        <div className='sideLink' onClick={()=> setOpenBar(false)}><NavLink to={'/'}>Home</NavLink></div>
        <div className='sideLink' onClick={()=> setOpenBar(false)}><NavLink to={'/matches'}>Today Matches</NavLink></div>
        <div className='sideLink' onClick={()=> setOpenBar(false)}><NavLink to={'/predictions'}>Predictions</NavLink></div>
        <div className='sideLink' onClick={()=> setOpenBar(false)}><NavLink to={'/contact'}>Contact</NavLink></div>
        <div className='sideLink' onClick={()=> setOpenBar(false)}><NavLink to={'/about'}>About </NavLink></div>
        <div className={`sideLink text-blue-800 ${role === 'user' ? "hidden": ""}`} onClick={()=> setOpenBar(false)}><NavLink to={'/admin'}> Admin Upload</NavLink></div>
      </div>
      
      
    </motion.div>
  )
}

export default SideBar