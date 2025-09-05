import React from 'react'
import useAuth from '../context/useAuth'
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';



const AuthRoute = ({children}) => {
  
  const {loggedIn} = useAuth();

  if(!loggedIn){
    return (<Navigate to={'/login'} replace/>)
  }

   return (
    <div>
      <Navbar/>
      {children}
    </div>) 
}

export default AuthRoute