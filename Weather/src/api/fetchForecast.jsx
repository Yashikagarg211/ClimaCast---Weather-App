import React from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function fetchForecast(city) {
    const url = `${FORECAST_API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);

  const forecasts = response.data.list.slice(0, 8); // Next 24 hours (3-hour intervals)
  const rainForecast = forecasts.find(item =>
    item.weather[0].main.toLowerCase().includes("rain") ||
    item.weather[0].description.toLowerCase().includes("rain"));
  return rainForecast
    ? `🌧️ Rain expected in the next 24 hours. Carry an umbrella!`
    : `✅ No rain expected in the next 24 hours.`;
}
