import React from 'react'
import fcblogo from '../assets/fcblogo.png'
import chelsealogo from '../assets/chelsealogo.png'

const Matches = () => {
  return (
    <>
    <div>
        <div className=' flex justify-between text-3xl max-sm:text-2xl mt-5 items-baseline-last'>
          <span className='ml-6'>Today Matches</span> <span className=' text-[16px] bg-teal-600 px-2 py-1 text-white mr-7 rounded'>19th Aug, 2026</span>
        </div>

        <div className='h-screen mx-20 max-sm:mx-5 max-sm:my-10 border-gray-300'>

          <div id='matchcard' className='flex flex-col mt-5 bg-white border-gray-500 rounded mx-5 shadow-[0px_1px_5px_gray]' >
            <div id='teams&score' className='flex mt-5 gap-2 justify-around max-sm:w-90 max-sm:mx-auto' >
              <div className='flex flex-col items-center'>
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

         

           

        </div>
    </div>
    </>
  )
}

export default Matches