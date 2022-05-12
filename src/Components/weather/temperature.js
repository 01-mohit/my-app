import React, { useState, useEffect } from 'react';
import "./style.css";
import { WeatherCard } from './weatherCard';

export const Temperature = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3b34b8fd566152621ed579f8490db58b`;
      const res = await fetch(url);
      const data = await res.json();
      // object destructuring
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };
      console.log(temp);
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { getWeatherInfo() }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search"
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}

          />
          <button className='searchButton' type='button' onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* card */}
      <WeatherCard tempInfo={tempInfo} />

    </>
  )
}
