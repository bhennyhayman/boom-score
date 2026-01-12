import useAuth from '../context/useAuth'
import {MdMenu, MdSportsSoccer, MdLogout} from 'react-icons/md'
import { api } from '../services/api';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {loggedIn,setLoggedIn,openBar,setOpenBar} = useAuth();
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
          <h1 className='text-2xl flex items-center align-middle gap-1'><Link to='/'>BoomScore</Link> <MdSportsSoccer size={20} className='mt-1.5' /></h1>
      </div>
      {loggedIn ? <button className='p-10 text-[18px]' onClick={logout}><MdLogout/></button>: <div className='p-4 text-[16px]'><Link to='/login'>Sign In</Link></div>}
    </div>
    {openBar && <SideBar/>}
    </>
  )
}

export default Navbar