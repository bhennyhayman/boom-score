import useAuth from '../context/useAuth'
import {MdMenu, MdSportsSoccer, MdLogout} from 'react-icons/md'
import { api } from '../services/api';
import SideBar from './SideBar';

const Navbar = () => {

  const {setLoggedIn,openBar,setOpenBar} = useAuth();
  async function logout(){
    try {
      const response = await api.get('/api/logout');
      const success = response.data?.success;
      if(success) setLoggedIn(false);
      localStorage.removeItem('userInfo');
    } catch (error) {
      console.error(error)
    }
    setOpenBar(false);
  }

 

  return (
    <>
    <div className='flex h-15 items-center justify-between bg-teal-600 text-white'>
      
      <div className='flex gap-4 p-2 items-center'>
         <div className='text-2xl cursor-pointer' onClick={() => setOpenBar(true)}><MdMenu size={30} color='white'/></div>
          <h1 className='text-2xl flex items-center align-middle gap-1'>BoomScore <MdSportsSoccer size={20} className='mt-1.5' /></h1>
      </div>
      <button className='p-10 text-[18px]' onClick={logout}><MdLogout/></button>
    </div>
    {openBar && <SideBar/>}
    </>
  )
}

export default Navbar