/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './Weather.scss'
import useTypedSelector from '../../hooks/useTypedSelector'

interface IWeatherData {
  weather: [{ [key: string]: string }];
  name: string;
  main: { [key: string]: number };
  wind: {
    speed: number,
  };
}

const Weather: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [weatherData, setWeatherData] = useState<IWeatherData | undefined>()
  const { language } = useTypedSelector( (state) => state.language)
  const weather = weatherData?.weather[0]
  const iconUrl = 'http://openweathermap.org/img/w/' + weather?.icon + '.png'

  useEffect(() => {
    const URL =
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      currentCountry?.capital +
      '&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=' + language
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json)
      })
      .catch((error) => {
        console.log('error:' + error)
      })
  }, [currentCountry, language])

  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])

  return (
    <div className="weather">
      <h1 className="weather__title">
        {weatherData?.name} : {weather?.description}
        <img src={iconUrl} alt={weather?.description} />
      </h1>
      <p className="weather__property">Current temperature: {weatherData?.main.temp}°</p>
      <p className="weather__property">High temperature: {weatherData?.main.temp_max}°</p>
      <p className="weather__property">Low temperature: {weatherData?.main.temp_min}°</p>
      <p className="weather__property">Wind Speed: {weatherData?.wind.speed} mi/hr</p>
    </div>
  )
}

export default Weather
