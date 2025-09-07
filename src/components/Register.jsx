import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { creatingUser } from '../services/api'


const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  async function registerUser(e){
    e.preventDefault();
    if(!username || !email || !password){
      setErr("Please fill in each field")
    }
    setErr("");

    const userData = {username,email,password};

    const response = await creatingUser(userData);
    console.log(response);

    if(response.data.success){  
      return setMsg("Account created successfully")
    }else{
      setErr(`${response.data.message || 'problem creating account' }`)
    }
    setMsg("");
  }

  return (
    <>
       <div className='h-screen w-vw bg-cyan-950 text-center'>
        <div className='text-2xl pt-25 text-white '>Create an account </div>
        <form className='flex flex-col bg-gray-800 mx-8 md:mx-20 mt-5 rounded'>

          <p className='text-white mt-5 mb-3 italic'>Enter your details to register</p>
          <input className='mx-auto w-65 bg-white text-black text-[16px] px-5 py-[8px] mt-3 ' type="text" onChange={e=>setUsername(e.target.value)} placeholder='Username ...' required />
          <input className='mx-auto w-65 bg-white text-black text-[16px] px-5 py-[8px] mt-1 ' type="email" onChange={e=>setEmail(e.target.value)} placeholder='Email ...' required  />
          <input className=' mx-auto w-65 mt-1 bg-white text-black text-[16px] px-5 py-[8px]' type="password" onChange={e=>setPassword(e.target.value)} placeholder='Password ...' required />

          {err && <div className='text-yellow-500 text-[18px]'>{err}</div>}
          {msg && <div className='bg-green-600 text-white py-2 px-5 w-fit mx-auto text-[16px] '>{msg}</div>}

          <button onClick={registerUser} className='btn my-3 text-white bg-cyan-900 w-fit mx-auto px-4 py-2'>Sign up</button>

          <p className='text-white p-2 mb-5'> <NavLink to={'/login'}>Already have an account. Login here</NavLink> </p>
        </form>
      </div>
    </>
  )
}

export default Register