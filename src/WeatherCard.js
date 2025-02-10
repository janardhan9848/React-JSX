// WeatherCard Component (WeatherCard.js)
import React from "react";
import "./components/Style.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temperature}</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}

export default WeatherCard;