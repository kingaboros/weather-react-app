import React from 'react';

import styles from './styles.module.scss';

const SearchResult = () => {
  let weatherData = {
    city: 'New York',
    temperature: 19,
    date: 'Tuesday 10.00',
    description: 'Cloudy',
    imgUrl: '',
    humidity: 8,
    wind: 10,
  };

  return (
    <div>
      <div className={styles.currentLocation}>
        <h2 className={styles.cityName}>{weatherData.city}</h2>
        <p>{weatherData.date}</p>
        <p className={styles.weatherFeature}>{weatherData.description}</p>
      </div>
      <div className="row">
        <div className="col-6">
          <div className={styles.temperature}>
            <i className="fas fa-cloud">{weatherData.imgUrl}</i>
            <span className={styles.temperature}>
              {weatherData.temperature}
            </span>
            <span>
              <sup>
                <a href="/"> &#176;C</a> |<a href="/">&#176;F</a>
              </sup>
            </span>
          </div>
        </div>

        <div className="col-6">
          <ul className={styles.weatherDesc}>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SearchResult;
