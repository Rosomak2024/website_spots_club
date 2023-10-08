import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
      const apiUrl = 'https://api.open-meteo.com/v1/forecast';
  
      axios
        .get(apiUrl, {
          params: {
            latitude: 52.2297,
            longitude: 21.0122,
            current_weather: true,
          },
        })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Błąd pobierania danych pogodowych:', error);
        });
    }, []);
  
    return (
      <div>
        {weatherData ? (
          <div className='weather_text'>
            <h2>Pogoda w Twojej okolicy:</h2>
            <p>Temperatura: {weatherData.current_weather.temperature}°C</p>
            <p>Opady: {weatherData.current_weather.precipitation} mm</p>
            <p>Wiatr: {weatherData.current_weather.windspeed} km/h</p>

          </div>
        ) : (
          <p>Ładowanie danych pogodowych...</p>
        )}
      </div>
    );
  }

  export  default WeatherComponent;
