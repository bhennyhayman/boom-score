import React from 'react'
import DataContext from './dataContext'
import { useState, useRef } from 'react'


const DataContextProvider = ({children}) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    const savedInfo = localStorage.getItem('userInfo');
    return savedInfo ? JSON.parse(savedInfo) : null;
  });
  const [openBar, setOpenBar] = useState(false);
  const screen = useRef(null);

  return (
    <DataContext.Provider value={{loggedIn, setLoggedIn, userInfo,setUserInfo, openBar,setOpenBar, screen}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider