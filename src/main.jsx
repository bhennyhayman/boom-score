import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import DataContextProvider from './context/DataContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // prevents refetch on tab switch
      retry: 1, // retry once on failure
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
       <DataContextProvider>
        <App />
      </DataContextProvider> 
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
