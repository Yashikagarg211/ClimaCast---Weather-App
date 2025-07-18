import React from 'react'

import RainPrediction from '../Rain Prediction/RainPrediction'; 

export default function WeatherCard({weather}) {

    function getClothingSuggestion(temp, condition) {
    if (condition.toLowerCase().includes("rain")) return "Carry an umbrella and wear waterproof shoes.";
    if (temp < 5) return "Wear a heavy jacket, gloves, and a scarf.";
    if (temp >= 5 && temp < 15) return "Wear a jacket or hoodie.";
    if (temp >= 15 && temp < 25) return "Wear light layers or a long-sleeve shirt.";
    if (temp >= 25) return "Wear shorts, t-shirts, and stay hydrated.";
    return "Dress comfortably.";
  }

  const suggestion = getClothingSuggestion(weather.main.temp, weather.weather[0].main);

  return (
    <div className='mt-6'>
        <h2 className='text-2xl font-semibold text-center'>
            {weather.name}, {weather.sys.country}</h2>
        <div className='flex justify-center items-center mt-4'>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className='w-16 h-16' />
            <p className='text-4xl font-bold'>
                {Math.round(weather.main.temp)}°C
            </p>
        </div>
        <p className='text-center text-gray-100 capitalize'>{weather.weather[0].description}</p>
        <div className='grid grid-cols-2 gap-4 mt-6'>
            <div className='text-center'>
            <p className='text-gray-400'>Humidity</p>
            <p className='font-bold'>{weather.main.humidity}%</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-400'>Wind</p>
            <p className='font-bold'>{weather.wind.speed} m/s</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-400'>Pressure</p>
            <p className='font-bold'>{weather.main.pressure} hPa</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-400'>Feels Like</p>
            <p className='font-bold'>{Math.round(weather.main.feels_like)}°C</p>
        </div>
        </div>
        
        {/* 🧥 Clothing Suggestion */}
      <p className='text-center text-yellow-300 font-semibold mt-4'>{suggestion}</p>

      {/* ☔ Rain Prediction (now moved to its own component) */}
      <RainPrediction city={weather.name} />

    </div>
  )
}
