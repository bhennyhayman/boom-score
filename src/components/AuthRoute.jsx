import React from 'react'
import useAuth from '../context/useAuth'
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const AuthRoute = ({children}) => {
  
  const {loggedIn} = useAuth();

  if(!loggedIn){
    return (<Navigate to={'/login'} replace/>)
  }

   return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>) 
}

export default AuthRoute