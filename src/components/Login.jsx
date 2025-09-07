import React from 'react'
import {  useNavigate, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { logUserIn } from '../services/api'
import useAuth from '../context/useAuth'


const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [err, setErr] = useState("");
  const {setLoggedIn, setUserInfo} = useAuth();
  const navigate = useNavigate();

  const showPassword = () => {
    const InputField = document.getElementById('password');

    if(InputField.type === 'password'){
      InputField.type = 'text';
    } else{
      InputField.type = 'password';
    }
  }
  

  async function loginUser(e){
    e.preventDefault();
    if(!email || !password){
      setErr('Enter a valid email and password')
      return
    }
    setErr("");
    try {
      const userData = {email,password};
      const response = await logUserIn(userData)

      const info = response.data.info;
      setUserInfo(info);
      localStorage.setItem('userInfo', JSON.stringify(info));
      const {success} = response.data;
      if(!success) {
        setErr("Problem signing in. Try again later")
      }else{
      setLoggedIn(true);
      navigate('/')
    }} catch (error) {
      console.error(error)
      setErr("Network issues.") 
    }
    
  }

  return (
      <>
      <div className='h-screen bg-cyan-950 text-center'>
        <div className='text-2xl pt-25 text-white '>Sign In </div>
        <form className='flex flex-col bg-gray-800 max-sm:mx-10 mx-[20%] mt-5 rounded p-2'>
          <input className='mx-auto max-sm:w-60 md:w-100 mt-5 bg-white text-black text-[18px] px-5 py-2' type="text" placeholder='Email ...' onChange={e => setEmail(e.target.value)} />
          <div className='flex flex-col items-center align-middle max-sm:w-60 mx-auto '>
            <input className='max-sm:w-60 md:w-100 mt-2 mb-3 bg-white text-black text-[18px] px-5 py-2' type="password" placeholder='Password ...' id='password' onChange={e => setPassword(e.target.value)}/>
            <span onClick={showPassword} 
            className='w-8 p-1 rounded-full text-[14px] bg-white cursor-pointer active:bg-gray-300'>👁</span>
          </div>

          {err && <div className='text-white bg-red-600 p-2 mx-auto w-fit mt-5 text-[14px]'>{err}</div>}
        
          <button onClick={loginUser} className='btn my-4 text-white bg-cyan-900 w-fit mx-auto px-4 py-2' >Log In</button>

          <p className='text-white py-2 mb-5 cursor-pointer'><NavLink to={'/register'}>Don't have an account. Click to register</NavLink> </p>
        </form>
      </div>
      </>
  )
}

export default Login