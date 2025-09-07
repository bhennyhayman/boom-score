import React from 'react'
import { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import { api } from '../../services/api';

const PredictionsUpload = () => {
  
  const [load, setLoad] = useState(false);
  const [msg, setMsg]= useState("");
  const [inputs, setInputs] = useState([1]);
  const [formData, setFormData] = useState([]);
  const [seelist, setSeeList] = useState(false);

  const newInput = () => {
    setInputs([...inputs, inputs.length + 1]);
  }

  async function handleSubmit(e){
    e.preventDefault();

    const info = localStorage.getItem("userInfo");
    let token;

    if (info) {
      const parsed = JSON.parse(info);
      token = parsed.token;
    }

    if(formData.length < 1) return;
    setLoad(true);
    const response = await api.post(`${import.meta.env.VITE_API_URL}/api/predictions`,formData, {headers: {Authorization: `Bearer ${token}`}});
    console.log(response.data);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((i)=>{
      i.value = "";
    })
    setMsg("Submitted");
    setTimeout(()=>{
      setMsg("")
    },1500)
    setLoad(false);
    setSeeList(true);
    
  }

  return (
    <div className='h-vh'>
      <form onSubmit={handleSubmit} className=' my-5'>
            
            <div id='inputs'>
              
              {inputs.map((num, index)=>
              <React.Fragment key={num}>
              {index === inputs.length-1 && 
              <div className='h-5'>
              <MdAdd size={25} 
              className='float-right cursor-pointer hover:rounded-full hover:text-teal-950 hover:bg-amber-200'
              onClick={newInput} /></div>
              }
              <div className={`flex flex-col mx-2`}>
               <p className='mx-2'>Match {index+1} </p>
               <input className="border-1 m-1 px-5 py-2 border-gray-200" type="text" name='fixture' 
               onChange={(e)=> {
                const newData = [...formData];
                newData[index] = {
                  ...newData[index],
                  fixture: e.target.value,
                }
                setFormData(newData);
               }}
               placeholder='Enter fixture' required />
               <input className="border-1 m-1 px-5 py-2 border-gray-200"
                onChange={(e)=>{
                const newData = [...formData];
                newData[index] = {
                  ...newData[index],
                  predictions: e.target.value,
                }
                setFormData(newData);
               }}
               type="text" name='predictions' placeholder='Enter predictions eg. o2.5 corners 8.5 btts yes' required/>
              </div>
              </React.Fragment>
              )}
              </div>
              {msg && <div className='flex mt-2 text-green-600'>{msg}</div>}
             <button type='submit' className='bg-teal-800 text-[16px] w-fit py-2 px-3 text-white rounded m-2 flex justify-self-center hover:bg-teal-500' >{load ? "Updating": "Update"}</button>

             {seelist && <>
              <div className='bg-gray-200 p-2'>
                <h3 className='text-center underline text-teal-800'>Your Predictions</h3>
                
                {formData.length > 0 && <>
                  {formData.map((item,index)=><React.Fragment key={index}>
                  <div className='m-4'>
                     <div>
                      Fixture: {item.fixture}
                    </div>
                    <div className='mb-2'>
                      Predictions: {item.predictions}
                    </div>
                    <hr />
                  </div>
                   
                  </React.Fragment>)}
                </>}
                </div>
             </> }
           </form>
           
    </div>
  )
}

export default PredictionsUpload