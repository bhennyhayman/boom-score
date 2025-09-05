import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import DataContextProvider from './context/DataContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <DataContextProvider>
        <App />
      </DataContextProvider> 
    </BrowserRouter>
  </StrictMode>,
)
