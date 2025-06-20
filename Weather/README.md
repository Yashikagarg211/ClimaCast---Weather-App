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
<pre>bash
git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app</pre>

2️⃣ Install Dependencies
<pre>bash
npm install</pre>

3️⃣ Setup Environment Variables
Create a .env file in the root directory:
<pre>ini
VITE_API_KEY=your_openweathermap_api_key_here
</pre>
➡️ Get your free API key from OpenWeatherMap

4️⃣ Start the Development Server
<pre>bash
npm run dev
</pre>

💻 Technologies Used
React
Axios
OpenWeatherMap API (Current Weather + Forecast)
Tailwind CSS
Vite (for fast builds)
HTML5 Video

✅ Future Features
📍 Geolocation-based weather fetching
🔔 Push Notifications for rain alerts
🌗 Theme switching (Light/Dark)
🗺️ Map Integration for visual forecasts

🤝 Contributing
Pull requests and suggestions are welcome!

👩‍💻 Author
Yashika garg
GitHub: @Yashikagarg211
