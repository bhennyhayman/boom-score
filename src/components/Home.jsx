import React, { useEffect, useState } from 'react'
import useAuth from '../context/useAuth'
import Footer from "./Footer"
import {api} from "../services/api"
import {createDate} from '../utils/date'

const Home = () => {
  
  const {openBar, setOpenBar, screen} = useAuth();

  const [news, setNews] = useState([]);

  useEffect(()=>{

    async function fetchData(){
      try {
        const response = await api.get(`${import.meta.env.VITE_API_URL}/api/news`);
        const data = response.data.data;
        if(response.data) return setNews(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    
  },[])

  useEffect(()=>{
    if(openBar && screen.current){
      const handleClick = () => {
        setOpenBar(false)
        console.log("clicked");
      }
      const viewscreen = screen.current;
      viewscreen.addEventListener('click', handleClick);

      return () => {
        viewscreen.removeEventListener("click", handleClick);
      };

    }    
  },[openBar]);
  
  
  return (
    <>
    <div className='min-h-screen w-dvw'  ref={screen}>

      <div className='text-3xl px-10 py-2 md:text-center'>Latest news</div>
      
      <div id='contents' className='flex max-sm:flex-col pb-10'> 

        {news.length > 0 ? <>
          {news.slice().reverse().map((n,i)=><React.Fragment key={i}>
          <div className="card max-sm:w-80 md:w-120 flex flex-col my-2 p-2 max-sm:mx-auto md:mx-10">
          <div><img src={n.image.url} alt="img" className='p-2 rounded-[15px] sm:h-60 w-full'/></div>
          <div className='text-[16px] font-medium text-emerald-700 ml-2 p-1'>{n.title}</div>
          <div className='ml-2 w-90 max-sm:text-[14px]'>{n.content.slice(0,250)+"..."}</div>
          <div className='mx-2 mt-2 max-sm:text-[14px] text-orange-600 font-medium'>Source: {n.source} </div>
          <div className='flex items-center justify-between'>
            <div className='ml-2 my-2 text-indigo-700 font-semibold cursor-pointer max-sm:text-[16px]'> <a href={n.sourceUrl}>Read more</a></div>
            <p className='pr-5 max-sm:text-[14px] text-green-700 font-semibold'>{createDate(n.updatedAt)}</p>
          </div>
        </div>
          </React.Fragment>)}  
        </> : <div className='mt-10 h-dvh'>
         
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 mt-20 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            </div> 
       
          
          </div>}
        

         

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
