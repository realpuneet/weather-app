import React from 'react'

const WeatherCard = ({weather, city}) => {
  // Emoji based on weather
  const emojiMap = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Smoke: "💨",
    Haze: "🌫️",
    Dust: "🌪️",
    Fog: "🌫️",
    Sand: "🏜️",
    Ash: "🌋",
    Squall: "🌬️",
    Tornado: "🌪️"
  };
  const main = weather.weather[0].main;
  const emoji = emojiMap[main] || "🌈";

  return (
    <div className="flex justify-center">
      <div className="bg-white/80 shadow-xl p-8 rounded-2xl text-center w-full max-w-md border border-blue-200 animate-fade-in-up">
        <h2 className="text-3xl font-extrabold mb-2 flex items-center justify-center gap-2">{emoji} {city}</h2>
        <p className="text-lg capitalize text-gray-700">{weather.weather[0].description}</p>
        <p className="text-6xl font-bold text-blue-500 mt-2 mb-2 transition-all duration-500">{weather.main.temp}°C</p>
        <div className="flex justify-center gap-6 mt-4 text-gray-600">
          <span title="Humidity">💧 {weather.main.humidity}%</span>
          <span title="Wind">💨 {weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard