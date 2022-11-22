import React, { useState } from 'react';
import axios from 'axios';

import { weatherDataType } from '../../constants/dataTypes';

import WeatherCard from '../WeatherCard/WeatherCard';
import styles from './styles.module.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState<weatherDataType>({
    temperature: 0,
    description: '',
    humidity: '',
    wind: 0,
    icon: '',
  });

  const displayWeather = (response: any) => {
    setIsLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const apiKey = '50a2cd96751f0c33cc1da997a8fb13b2';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  };

  const showCityData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputForm}
          type="search"
          placeholder="Enter a city..."
          onChange={showCityData}
        />
        <input className={styles.submitInput} type="submit" value="Search" />
      </form>
      {isLoaded ? (
        <WeatherCard
          temperature={weatherData.temperature}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
          description={weatherData.description}
          icon={weatherData.icon}
        />
      ) : null}
    </div>
  );
};

export default Search;
