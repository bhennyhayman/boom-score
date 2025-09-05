import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { api } from '../services/api';

export default function Predictions() {

  const [predictions, setPredictions] = useState([]);

  useEffect(()=>{
    async function getpredictions(){
      try {
         const response = await api.get(`${import.meta.env.VITE_API_URL}/api/predictions`)
         const matches = response.data.data;
         setPredictions(matches[0].data);
      } catch (error) {
        console.error(error)
      }
    }
    getpredictions();
  },[])

  return (
    <div className="bg-gray-50 w-dw">
  
      <section id="prediction" className="max-w-5xl mx-5 my-5">
        <h1 className="text-2xl font-bold text-teal-700 mb-8">⚽ Football Predictions</h1>

        {predictions.length > 0 && <>
          {predictions.map((match, index)=> <React.Fragment key={index}>
           
           <div className="bg-white rounded-xl shadow-md p-6 m-3 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-green-700 mb-2">{match.fixture}</h2>
            <div className="text-gray-700">
             <div className='text-cyan-800 font-semibold'>
              {match.predictions}</div>
            </div>
          </div>
          
          </React.Fragment> )}
        </>}

        <div className="grid md:grid-cols-2 gap-6">
         


          </div>

        
      </section>

      
      <section className="max-w-3xl mx-2 mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-extrabold text-red-500 mb-4">SportyBet Codes</h2>
          <div className="space-y-3 text-lg">
            <div className="p-3 rounded-md bg-gray-100">
              <span className="font-bold text-gray-800">Code 1:</span> 100 odds{" "}
              <span className="text-teal-700 font-mono">[xvGy10a]</span>
            </div>
            <div className="p-3 rounded-md bg-gray-100">
              <span className="font-bold text-gray-800">Code 2:</span> 80 odds{" "}
              <span className="text-teal-700 font-mono">[xvGy10a]</span>
            </div>
            <div className="p-3 rounded-md bg-gray-100">
              <span className="font-bold text-gray-800">Code 3:</span> 2 odds{" "}
              <span className="text-teal-700 font-mono">[xvGy10a]</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}