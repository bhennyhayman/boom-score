import React from 'react'
import { useState } from 'react'
import { MdClose } from 'react-icons/md';
import {api} from '../../services/api'


const Newsupload = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [source, setSource] = useState("");
    const [sourceUrl, setSourceUrl] = useState("");
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess]= useState("");

    function imageUpload(e){
    const file = e.target.files[0];
    if(file){
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    if(!title || !content ||!image){
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('source', source)
    formData.append('sourceUrl', sourceUrl)
    formData.append('image', image);

    const info = localStorage.getItem("userInfo");
    let token;

    if (info) {
      const parsed = JSON.parse(info);
      token = parsed.token;
    }

    setLoading(true);
    try {
      const response = await api.post(`${import.meta.env.VITE_API_URL}/api/addNews`, formData, {headers: {Authorization: `Bearer ${token}`}});
      console.log(response.data);
      if(response.data) setSuccess("Submitted");
    } catch (error) {
      console.error(error.message || "error submitting")
    }finally{
      setLoading(false);
      setTitle("")
      setContent("")
      setSource("")
      setSourceUrl("")
      setImage(null);
      setPreview(null);
      setTimeout(()=>{
        setSuccess("");
      },2000)
    }
    
  }
  
  return (

    <div className='h-80vh'>
       <form className='flex flex-col my-5 mx-10'>
        <input className="py-2 border-1 my-1 px-2 border-gray-200" type="text" placeholder='Headline or Title ...' onChange={(e)=>setTitle(e.target.value)} value={title} required/>
        <textarea className="py-2 border-1 my-1 h-80 px-2 border-gray-200" type="text" placeholder='Content...' onChange={(e)=>setContent(e.target.value)} value={content} required />

        <input className="py-2 border-1 my-1 px-2 border-gray-200" type="text" placeholder='Name of source' onChange={(e)=>setSource(e.target.value)} value={source} required/>

        <input className="py-2 border-1 my-1 px-2 border-gray-200" type="text" placeholder='Link to source' onChange={(e)=>setSourceUrl(e.target.value)} value={sourceUrl} required/>

        {preview && <div className='flex justify-center relative'>
          <img src={preview} alt="image" className='m-1 w-60 h-50 flex'/>
          <span className='absolute left-75 hover:bg-red-400 bg-red-600 m-2 py-2 px-2 rounded-full' onClick={()=>setPreview(null)}><MdClose size={25} color='white'/></span>
          </div>}
        

        {!preview && <> <label htmlFor="fileUpload" className='cursor-pointer bg-gray-500 text-center py-2 m-1 text-white hover:bg-gray-400'>Upload Image</label>
        <input name='image' type="file" id='fileUpload' accept='image/*' onChange={imageUpload} className='hidden' required /></>}

        {success && <div className='text-center text-green-600'>{success}</div>}
        <button type='submit' className='bg-teal-800 text-[16px] w-fit py-2 px-3 text-white rounded m-2 mx-auto hover:bg-teal-500' onClick={handleSubmit}>{loading ? "Submitting...": "Submit News"}</button>
        
      </form>
    </div>
  )
}

export default Newsupload