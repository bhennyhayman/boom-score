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
    <div className='w-dw min-h-100'>
        <div className=' flex justify-between mx-5 max-sm:text[14px] mt-5 items-center'>
          <span className=' text-[18px] mx-5 font-bold'>Today Matches</span> 
          <span className=' text-[14px] bg-teal-600 px-2 py-1 text-white mr-7 rounded'>{todayDate()}</span>
        </div>

        <div id="matchesContainer" className='w-vw mx-10'>
          
          <div id='matchcard' className='flex mx-auto flex-col mt-5 bg-gray-200 border-gray-500 rounded shadow-[0px_1px_5px_gray]' >  
            
            {matches.length > 0 ? <>
              {matches.map((match, index)=> <div key={index} className="bg-[#274d3d] text-white" >
                <div className='flex gap-2 items-center p-1 m-2'>
                  <div> {match.area.name} </div>
                  <img src={match.area.flag} alt="flag" className='w-5 h-5' />
                </div>
                
                <div>
                  <div className='flex justify-between px-[10%] items-center text-2xl gap-5 '><img src={match.homeTeam.crest}  alt="crest" className='h-15 w-15' /> 
                  <span className='text-4xl'> {match.score.fullTime.home || 0}</span>
                  vs <span className='text-4xl' >{match.score.fullTime.away || 0}</span> 
                  <img src={match.awayTeam.crest}  alt="crest" className='h-15 w-15' />
                  </div>
                  <div className='flex justify-between px-[10%] mx-auto'>
                    <p>{match.homeTeam.shortName}</p>
                    <p>{match.awayTeam.shortName}</p>
                  </div>
                  <div className="text-center mb-2">Time: {match.utcDate.slice(11,16)}</div>
                </div>
              </div>)}
            </>: 
            <div className=' mx-auto my-20'>
              <div className='m-2'>No matches available</div>  
              <div>Please check again later</div>
            </div>}
        
          </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Matches