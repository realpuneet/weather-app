import React from 'react'

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

const ForecastCard = ({weather}) => {
  const main = weather.weather[0].main;
  const emoji = emojiMap[main] || "🌈";
  const date = new Date(weather.dt_txt);
  const day = date.toLocaleDateString(undefined, { weekday: 'short' });
  const time = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white/80 rounded-xl shadow-md p-4 m-2 flex flex-col items-center min-w-[120px] hover:scale-105 transition-transform duration-300 animate-bounce-in">
      <span className="text-3xl mb-1">{emoji}</span>
      <span className="font-semibold text-blue-700">{day}</span>
      <span className="text-xs text-gray-500">{time}</span>
      <span className="capitalize text-gray-700">{weather.weather[0].description}</span>
      <span className="font-bold text-lg text-blue-500 mt-1">{weather.main.temp}°C</span>
    </div>
  )
}

export default ForecastCard