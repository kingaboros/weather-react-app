import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { weatherDataType } from '../../constants/dataTypes';

const WeatherCard = ({
  temperature,
  description,
  humidity,
  wind,
  icon,
}: weatherDataType) => {
  return (
    <div style={{ textAlign: 'left' }}>
      {temperature ? (
        <ul>
          <li>Temperature: {Math.round(temperature)} °C </li>
          <li>Description: {description} </li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {Math.round(wind)} km/h </li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      ) : (
        <ThreeDots
          radius="9"
          color="black"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: 'block',
          }}
          visible={true}
        />
      )}
    </div>
  );
};

export default WeatherCard;
