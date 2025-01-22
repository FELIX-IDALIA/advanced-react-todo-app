// src/components/Weather/WeatherWidget.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../store/todoSlice';
import { Cloud, AlertCircle, Loader2 } from 'lucide-react';

const WeatherWidget = () => {
  const dispatch = useDispatch();
  const { weather, weatherStatus, weatherError } = useSelector((state) => state.todos);

  useEffect(() => {
    if (weatherStatus === 'idle') {
      dispatch(fetchWeather());
    }
    
    // Refresh weather every 30 minutes
    const interval = setInterval(() => {
      dispatch(fetchWeather());
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch, weatherStatus]);

  if (weatherStatus === 'loading') {
    return (
      <div className="mb-6 p-4 bg-blue-50 rounded-lg flex items-center gap-3">
        <Loader2 className="animate-spin text-blue-500" />
        <p className="text-blue-800">Loading weather data...</p>
      </div>
    );
  }

  if (weatherStatus === 'failed') {
    return (
      <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center gap-3">
        <AlertCircle className="text-red-500" />
        <p className="text-red-800">
          Failed to load weather: {weatherError}
        </p>
      </div>
    );
  }

  if (weather) {
    return (
      <div className="mb-6 p-4 bg-blue-50 rounded-lg flex items-center gap-3">
        <Cloud className="text-blue-500" />
        <div>
          <p className="text-blue-800">
            {weather.temperature}°C - {weather.condition}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default WeatherWidget;