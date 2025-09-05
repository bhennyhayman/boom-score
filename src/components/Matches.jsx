import fcblogo from '../assets/fcblogo.png'
import chelsealogo from '../assets/chelsealogo.png'
import Footer from "./Footer"
import { todayDate } from '../utils/date'
import { useState, useEffect } from 'react'
import {api} from "../services/api"

const Matches = () => {

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
     const fetchTodayMatches = async () => {
      try {
        const res = await api(`${import.meta.env.VITE_API_URL}/api/matches`)
        setMatches(res.data.matches); 
      } catch (error) {
        console.error("Error fetching today's matches:", error);
      }
    };
    fetchTodayMatches();
  },[])
  
  return (
    <>
    <div className='w-dw'>
        <div className=' flex justify-between mx-5 max-sm:text[14px] mt-5 items-center'>
          <span className=' text-[18px] mx-5 font-bold'>Today Matches</span> 
          <span className=' text-[14px] bg-teal-600 px-2 py-1 text-white mr-7 rounded'>{todayDate()}</span>
        </div>

        <div id="matchesContainer">
          <div id='matchcard' className='flex flex-col mt-5 bg-gray-200 border-gray-500 rounded mx-10 shadow-[0px_1px_5px_gray]' >
            
            <div id='teams&score' className='flex mt-5 gap-2 justify-around max-sm:w-90 max-sm:mx-auto' >
              <div className='flex flex-col'>
                <div ><img className='h-15 w-15' src={fcblogo} alt="img" /></div>
                <div className='text-2xl'>Barcelona</div>
              </div>
            <div className='flex flex-col text-center items-center align-middle'>
              <span className='text-4xl'>0 : 0</span>
              <span className=' mt-6'>Vs</span>
            </div>
            <div className='flex flex-col items-center'>
              <div ><img className='h-15 w-15 object-cover' src={chelsealogo} alt="img" /></div>
              <div className='text-2xl'>Chelsea</div>
            </div>
            </div>
            
           <div className='text-center flex justify-between max-sm:w-70 mx-auto py-2 text-[16px] min-sm:gap-30 text-teal-800 font-bold'> <span>El nombre stadio</span> <span>8:00pm</span></div>
          </div>

        <div className='text-center mt-20'>WORK IN PROGRESS...</div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Matches