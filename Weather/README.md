# 🌦️ Weather Forecast App with Rain Prediction

This is a responsive React-based Weather App that allows users to search for weather conditions of any city worldwide, powered by the OpenWeatherMap API. Along with temperature, humidity, and wind details, this app also **predicts if rain is expected in the next 24 hours** to help you decide whether to carry an umbrella.

## ✨ Features

- 🌍 **Search Weather by City Name**
- 📊 **Current Temperature, Humidity, Wind, Pressure**
- 🧥 **Clothing Recommendations based on temperature**
- ☔ **Umbrella Advice based on real-time rain forecast (next 24 hrs)**
- 🎥 **Animated Background Video**
- 📱 **Responsive Design (Mobile & Desktop)**

## 📂 Project Structure
/src
├── /components
│ ├── Search.jsx # Search input component
│ ├── WeatherCard.jsx # Displays weather details and suggestions
│ └── RainPrediction.jsx # Handles rain forecast display
│
├── /api
│ └── fetchForecast.js # API handler for fetching rain forecast
│
├── assets/ # Media files (e.g., background video)
├── App.jsx
└── main.jsx

## 🛠️ Getting Started

### 1️⃣ Clone Repository