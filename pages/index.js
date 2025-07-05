import ForecastCard from '@/components/ForecastCard';
import WeatherCard from '@/components/WeatherCard';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'
import Head from 'next/head';

const HomePage = () => {
  const [city, setcity] = useState('');
  const [weather, setweather] = useState(null);
  const [error, seterror] = useState('');

  const fetchWeather = async () => {
    if(!city) return;
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      if(!res.ok) throw new Error("City not found!");
      const data = await res.json();
      
      setweather(data);
      seterror('');
    } catch (error) {
      setweather(null);
      seterror(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-100 to-yellow-100">
      <Head>
        <title>Weather 24x7</title>
        <link rel="icon" href="https://i.pinimg.com/736x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg" sizes="any" />
      </Head>
      <Navbar />
      <div className='flex pt-5 flex-col items-center justify-center min-h-[80vh] px-2'>
        <div className='flex gap-2 items-center w-full max-w-md mb-8'>
          <input 
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e)=> setcity(e.target.value)}
            className='bg-white/80 text-black outline-0 p-2 rounded-lg w-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition'
          />
          <button 
            onClick={fetchWeather} 
            className="bg-yellow-300 hover:bg-yellow-400  rounded-lg text-black px-4 py-2 font-semibold shadow transition-all duration-200 text-nowrap"
          >
            🔍Search
          </button>
        </div>

        <div className="w-full flex flex-col items-center">
          {weather && weather.list && weather.city ? (
            <>
              <WeatherCard weather={weather.list[0]} city={weather.city.name} />

              <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2 text-blue-700 animate-fade-in-down">
                5-day forecast <span>📅</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4 w-full animate-fade-in-up">
                {weather.list.slice(1,6).map((item, index) => (
                  <ForecastCard key={index} weather={item} />
                ))}
              </div>
            </>
          ) : error ? (
            <div className="text-red-500 text-lg font-semibold animate-shake">{error}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HomePage