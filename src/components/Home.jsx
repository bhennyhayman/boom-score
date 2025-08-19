import React, { useEffect } from 'react'
import useAuth from '../context/useAuth'
import haaland from '../assets/haaland.webp'
import nunez from '../assets/nunez.webp'

const Home = () => {
  
  const {openBar, setOpenBar, screen} = useAuth();


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
    <div className='h-100% min-sm:h-dvh'  ref={screen}>

      <div className='text-3xl px-10 py-2'>Latest news</div>
      
      <div id='contents' className='flex max-sm:flex-col pb-10'> 
        <div className="card max-sm:w-100 md:w-120 flex flex-col my-2 p-2 max-sm:mx-10">
          <div><img src={haaland} alt="img" className='p-2 rounded-[15px] sm:h-60 w-full'/></div>
          <div className='text-2xl text-emerald-700 ml-2 p-1'>Halland joins Man City</div>
          <div className='ml-2 w-90 wrap-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum harum, deleniti provident rem corporis inventore odio consectetur voluptate id ad fugit atque alias quas perspiciatis quaerat iste deserunt et!</div>
          <div className='flex items-center justify-between'>
            <div className='ml-2 my-2 text-indigo-700 font-semibold'>Read more</div>
            <p className='pr-5 text-green-700 font-semibold'>20th June, 2023</p>
          </div>
        </div>

          <div className="card max-sm:w-100 md:w-120 flex flex-col my-2 p-2 max-sm:mx-10">
          <div><img src={nunez} alt="img" className='p-2 rounded-[15px] sm:h-60 w-full'/></div>
          <div className='text-2xl text-emerald-700 ml-2 p-1'>Nunez set to leave Liverpool</div>
          <div className='ml-2 w-90 wrap-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum harum, deleniti provident rem corporis inventore odio consectetur voluptate id ad fugit atque alias quas perspiciatis quaerat iste deserunt et!</div>
          <div className='flex items-center justify-between'>
            <div className='ml-2 my-2 text-indigo-700 font-semibold'>Read more</div>
            <p className='pr-5 text-green-700 font-semibold'>20th June, 2023</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home