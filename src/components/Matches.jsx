import Footer from "./Footer"
import { todayDate } from '../utils/date'
import { useState, useEffect } from 'react'
import {api} from "../services/api"
import { getCurrentTime } from "../utils/time"

const Matches = () => {

  const [matches, setMatches] = useState([]);
  const time = getCurrentTime().slice(0,4);

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

        <div id="matchesContainer" className='w-vw max-sm:w-80 max-sm:mx-auto mx-[10%]'>
          
          <div id='matchcard' className='flex mx-auto flex-col mt-5 border-gray-500 rounded shadow-[0px_1px_5px_gray]' >  

            {matches.length < 0 && <div className=' mx-auto my-20'>
              <div className='m-2'>No matches available</div>  
              <div>Please check again later</div>
            </div> }
            
            {matches.length > 0 ? <>
              {matches.map((match, index)=> 
              <div key={index} className="mt-2 bg-green-700 text-white" >
                <div className='flex items-center justify-between px-10 py-1 my-1 border-gray-200 border-b-1 border-t-1'>
                  <div className="font-medium"> {match.area.name} </div>
                  <div className="bg-green-100 rounded-full p-1"><img src={match.area.flag} alt="flag" className='w-5 h-5' /></div>
                </div>
        
                <div className="mt-3">
                  <div className='flex justify-between px-[10%] text-2xl items-center gap-5 '>

                    <div className="w-15 items-center flex justify-center mr-5"><img src={match.homeTeam.crest}  alt="crest" className='h-10 w-10' /> </div>
                    <span className=''> {match.score.fullTime.home || 0}</span>
                     <p>vs</p> 
                    <span className='' >{match.score.fullTime.away || 0}</span> 
                    <div className="w-15 items-center max-sm:ml-5 flex justify-center"><img src={match.awayTeam.crest}  alt="crest" className='h-10 w-10' /></div>
                  </div>
                  <div className='flex justify-between px-[10%] mx-auto mt-2 max-sm:gap-20'>
                    <p className="text-[14px]">{match.homeTeam.shortName}</p>
                    <p className="text-[14px]">{match.awayTeam.shortName}</p>
                    
                  </div>
                  <div className="text-center text-[14px] my-2">{parseInt(time) > parseInt(match.utcDate.slice(11,16)) ? "Ended": <div>{match.utcDate.slice(11,16)}</div>}</div>
                </div>
              </div>)}
            </>: 
            <div className=' mx-auto my-20'>
              <div className='m-2 animate-ping'>Loading ...</div>  
            
            </div>}
        
          </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Matches