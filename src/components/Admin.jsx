import {useRef, useState} from "react"
import useAuth from '../context/useAuth';
import { Navigate } from 'react-router-dom';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Newsupload from "./uploads/Newsupload";
import PredictionsUpload from "./uploads/PredictionsUpload";

const Admin = () => {

  const {userInfo} = useAuth();
  const role = userInfo.role;
  const dropIcon = useRef(null);
  const [down1,setDown1] = useState(false);
  const [down2,setDown2] = useState(false);
  const [newsTab,setNewsTab] = useState(false);
  const [predictTab,setPredictTab] = useState(false);

  if(role === "user") return <Navigate to={'/'} replace/>

  function handleDrop(tab){
    if(tab === "news"){
      setDown1(!down1);
      setNewsTab(!newsTab);
    }

    if(tab === "predict"){
      setDown2(!down2);
      setPredictTab(!predictTab);
    }
    
  }

  
  return (
    <>
    <div className="">
      <h1 className='text-2xl m-2 text-center'>Admin Panel</h1>

      <div className='mx-5 mt-5'>
        <div className="flex  bg-gray-900  hover:bg-teal-600 cursor-pointer text-white mb-4 items-center justify-between " onClick={()=> handleDrop("news")}>
           <p className='p-3 rounded flex-1  hover:text-white active:text-blue-500'>News Upload</p>
        <span ref={dropIcon} className="px-3">{down1 ? <MdArrowDropDown size={30} color="white"/>: <MdArrowDropUp size={30} color="white"/>}</span>
        </div>
        {newsTab && <Newsupload />}

        <div className="flex  bg-gray-900  hover:bg-teal-600 cursor-pointer text-white mb-4 items-center justify-between " onClick={()=> handleDrop("predict")}>
           <p className='p-3 rounded flex-1  hover:text-white active:text-blue-500'>Predictions Upload</p>
        <span ref={dropIcon} className="px-3">{down2 ? <MdArrowDropDown size={30} color="white"/>: <MdArrowDropUp size={30} color="white"/>}</span>
        </div>
        {predictTab && <PredictionsUpload />}


      </div>

     

    </div>
    </>
  )
}

export default Admin