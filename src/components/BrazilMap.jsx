import React from 'react'

const BrazilMap = () => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-gray-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
        <svg 
          viewBox="0 0 500 400" 
          className="w-full h-full max-w-lg"
          fill="currentColor"
        >
          {/* Simplified Brazil Map - More realistic shape */}
          <path 
            d="M 150 80 
               L 180 70 
               L 220 75 
               L 260 80 
               L 300 85 
               L 340 90 
               L 370 100 
               L 390 120 
               L 400 140 
               L 410 160 
               L 415 180 
               L 420 200 
               L 425 220 
               L 430 240 
               L 425 260 
               L 420 280 
               L 410 300 
               L 400 315 
               L 385 325 
               L 370 330 
               L 350 335 
               L 330 340 
               L 310 345 
               L 290 350 
               L 270 355 
               L 250 360 
               L 230 365 
               L 210 360 
               L 190 355 
               L 170 350 
               L 150 345 
               L 130 340 
               L 115 335 
               L 100 325 
               L 90 310 
               L 85 295 
               L 80 280 
               L 75 265 
               L 70 250 
               L 75 235 
               L 80 220 
               L 85 205 
               L 90 190 
               L 95 175 
               L 100 160 
               L 110 145 
               L 120 130 
               L 130 115 
               L 140 100 
               L 150 80 Z" 
            className="fill-gray-300 hover:fill-gray-400 cursor-pointer transition-colors duration-200"
            stroke="#fff"
            strokeWidth="2"
          />
          
          {/* Add some internal state divisions for more realism */}
          <line x1="150" y1="150" x2="350" y2="150" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="100" x2="200" y2="300" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <line x1="300" y1="120" x2="300" y2="320" stroke="#fff" strokeWidth="1" opacity="0.5" />
          
          {/* Center text */}
          <text x="250" y="200" textAnchor="middle" className="text-sm fill-gray-600 font-medium">
            Brasil
          </text>
        </svg>
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="w-8 h-8 bg-blue-500 text-white rounded border border-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center text-lg font-bold">
          +
        </button>
        <button className="w-8 h-8 bg-orange-500 text-white rounded border border-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center text-lg font-bold">
          −
        </button>
      </div>
    </div>
  )
}

export default BrazilMap

