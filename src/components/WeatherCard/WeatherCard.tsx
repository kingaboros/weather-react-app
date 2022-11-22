import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

interface IProps {
  temperature: number;
  weatherDescription: string;
  humidity: string;
  wind: number;
  icon: any;
}

const WeatherCard = ({
  temperature,
  weatherDescription,
  humidity,
  wind,
  icon,
}: IProps) => {
  return (
    <div style={{ textAlign: 'left' }}>
      {temperature ? (
        <ul>
          <li>Temperature: {Math.round(temperature)} °C </li>
          <li>Description: {weatherDescription} </li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {Math.round(wind)} km/h </li>
          <li>
            <img src={icon} alt={weatherDescription} />
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
