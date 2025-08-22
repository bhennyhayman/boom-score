import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import {api} from '../services/api'

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

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
    formData.append('image', image);

    setLoading(true);
    try {
      const response = await api.post(`${import.meta.env.VITE_API_URL}/addNews`, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error.message || "error submitting")
    }
    setLoading(false);
  }
  return (
    <>
    <div className='h-screen'>
      
      <h1>Admin Panel</h1>

      <h2>News Upload</h2>

      <form className='flex flex-col my-5 mx-10'>
        <input className="py-2 border-1 my-1 px-2 border-gray-200" type="text" placeholder='Headline or Title ...' onChange={(e)=>setTitle(e.target.value)} value={title} required/>
        <textarea className="py-2 border-1 my-1 h-80 px-2 border-gray-200" type="text" placeholder='Content...' onChange={(e)=>setContent(e.target.value)} value={content} required />

        {preview && <div className='flex justify-center relative'>
          <img src={preview} alt="image" className='m-1 w-60 h-50 flex'/>
          <span className='absolute left-75 hover:bg-red-400 bg-red-600 m-2 py-2 px-2 rounded-full' onClick={()=>setPreview(null)}><MdClose size={25} color='white'/></span>
          </div>}
        

        {!preview && <> <label htmlFor="fileUpload" className='cursor-pointer bg-gray-500 text-center py-2 m-1 text-white hover:bg-gray-400'>Upload Image</label>
        <input name='image' type="file" id='fileUpload' accept='image/*' onChange={imageUpload} className='hidden' required /></>}

       
        <button type='submit' className='bg-teal-800 text-[16px] w-fit py-2 px-3 text-white rounded m-2 mx-auto hover:bg-teal-500' onClick={handleSubmit}>{loading ? "Submitting...": "Submit News"}</button>
      </form>

    </div>
    </>
  )
}

export default Admin