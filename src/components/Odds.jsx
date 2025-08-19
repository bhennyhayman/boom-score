import React from 'react'

export default function Predictions() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
   

      <section id="prediction" className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-teal-700 mb-8">⚽ Football Predictions</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-red-600 mb-2">PSG vs Arsenal</h2>
            <p className="text-gray-700">
              <span className="text-teal-700 font-bold">Win:</span> Any team to win
              <span className="ml-4 text-teal-700 font-bold">Goals:</span> 1.5
              <span className="ml-4 text-teal-700 font-bold">Corners:</span> 8.5
              <br />
              <span className=" text-teal-700 font-bold">GG:</span> Yes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-red-600 mb-2">Bayern vs man city</h2>
            <p className="text-gray-700">
              <span className="text-teal-700 font-bold">Win:</span> Any team to win
              <span className="ml-4 text-teal-700 font-bold">Goals:</span> 1.5
              <span className="ml-4 text-teal-700 font-bold">Corners:</span> 8.5
              <br />
              <span className=" text-teal-700 font-bold">GG:</span> Yes
            </p>
          </div>
          </div>

        
      </section>

      
      <section className="max-w-3xl mx-auto mt-12">
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
    </div>
  );
}