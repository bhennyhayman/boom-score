import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import AuthRoute from './components/AuthRoute'
import Register from './components/Register'
import useAuth from './context/useAuth'
import { useEffect, useState } from 'react'
import { api } from './services/api'
import Matches from './components/Matches'
import Predictions from './components/Predictions'
import Contact from './components/Contact'
import About from './components/About'
import Admin from './components/Admin'



const App = () => {

    const [loading, setLoading] = useState(true)
    const {loggedIn,setLoggedIn} = useAuth();


    useEffect(()=>{
        
        async function fetchToken(){
            try {
                const response = await api.get(`${import.meta.env.VITE_API_URL}/api/getToken`);
                const {success} = response.data;
                if(success){
                    setLoggedIn(true);
                }
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        } 
        fetchToken();
    },[])


    if (loading) return <div className='text-teal-600 mt-50 text-center animate-ping'>Loading ...</div>
     return (
        <>
        <Routes>
          
            <Route path='/' element={<AuthRoute><Home/></AuthRoute>}/>
            <Route path='/matches' element={<AuthRoute><Matches/></AuthRoute>}/>
            <Route path='/predictions' element={<AuthRoute><Predictions/></AuthRoute>}/>
            <Route path='/contact' element={<AuthRoute><Contact/></AuthRoute>}/>
            <Route path='/about' element={<AuthRoute><About/></AuthRoute>}/>
            <Route path='/admin' element={<AuthRoute><Admin/></AuthRoute>}/>


            <Route path='/login' element={loggedIn ? <Home/> : <Login/>}/>
            <Route path='/register' element={loggedIn ? <Home/> :<Register/>}/>
        </Routes>
        </> )

}

export default App
