import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-100 to-yellow-100">
      <Head>
        <title>About | Weather 24x7</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 max-w-xl w-full border border-blue-200 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            🌦️ About Weatherly
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Weatherly is your friendly weather companion! Get real-time weather updates, 5-day forecasts, and more for any city in the world. 
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>🌍 Global city search</li>
            <li>📅 5-day animated forecast</li>
            <li>⚡ Fast & responsive design</li>
            <li>💡 Powered by OpenWeatherMap API</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-2xl">☁️</span>
            <span className="text-2xl">🌧️</span>
            <span className="text-2xl">❄️</span>
            <span className="text-2xl">🌈</span>
            <span className="text-2xl">🌞</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About