import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import AuthRoute from './components/AuthRoute'
import Register from './components/Register'
import useAuth from './context/useAuth'
import { useEffect, useState } from 'react'
import { api } from './services/api'



const App = () => {

    const [loading, setLoading] = useState(true)
    const {loggedIn,setLoggedIn} = useAuth();

    useEffect(()=>{
        
        async function fetchToken(){
            try {
                const response = await api.get('/getToken');
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


    if (loading) return <div className='text-red-600 mt-50 text-center animate-ping'>Loading ...</div>
     return (
        <>
        <Routes>
            {/* Protected Routes */}
            <Route path='/' element={<AuthRoute><Home/></AuthRoute>}/>


            <Route path='/login' element={loggedIn ? <Home/> : <Login/>}/>
            <Route path='/register' element={loggedIn ? <Home/> :<Register/>}/>
        </Routes>
        </> )

}

export default App
