import React, { useEffect, useState } from 'react'
import useAuth from '../context/useAuth'
import Footer from "./Footer"
import {api} from "../services/api"
import {createDate} from '../utils/date'
import Navbar from '../components/Navbar'

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
    <div className='min-h-screen w-vw'  ref={screen}>
      <Navbar/>

      <div className='text-3xl px-10 py-2 md:text-center'>Latest news</div>
      
      <div
  id="contents"
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    px-4
    pb-10
  "
>

        {news.length > 0 ? (
  news
    .slice()
    .reverse()
    .map((n, i) => (
      <div
        key={i}
        className="
          card
          w-full
          max-w-sm
          mx-auto
          flex
          flex-col
          bg-white
          rounded-xl
          shadow
          p-3
        "
      >
        <img
          src={n.image.url}
          alt="img"
          className="rounded-lg h-56 w-full object-cover"
        />

        <h3 className="text-[16px] font-medium text-emerald-700 mt-2">
          {n.title}
        </h3>

        <p className="text-[14px] mt-1 text-gray-700">
          {n.content.slice(0, 250)}...
        </p>

        <p className="text-orange-600 text-[14px] mt-2 font-medium">
          Source: {n.source}
        </p>

        <div className="flex items-center justify-between mt-3 text-[14px]">
          <a
            href={n.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 font-semibold hover:underline"
          >
            Read more
          </a>

          <span className="text-green-700 font-semibold">
            {createDate(n.updatedAt)}
          </span>
        </div>
      </div>
    ))
) : ( <div className='h-80 mt-10 w-dvw'>
         
            <div className="flex justify-center mx-auto">
              <div className="w-12 h-12 mt-20 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            </div> 
       
          
          </div>)}
        

         

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
