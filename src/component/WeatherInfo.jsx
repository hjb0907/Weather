import React from "react";

const WeatherInfo = ({weather})=>{
  console.log(weather);

  return(
    <div className="weatherinfo">
      <h2>{weather?.name}</h2>
      <h3>{(weather?.main?.temp)?.toFixed(2)}°C{' '}°C <span style={{marginLeft:10}}>  {(weather?.main?.temp * 1.8 + 32)?.toFixed(2)}°F</span></h3>
      <h3>{Math.floor(weather?.main.temp)}°C <span style={{marginLeft:10}}> {Math.floor(weather?.main.temp * 1.8 + 32)}°F</span></h3>
      <h3>{weather?.weather[0].description}</h3>
      <h3>최고온도 : {weather?.main.temp_max}</h3>
      <h3>최저온도 : {weather?.main.temp_min}</h3>
      <h3>습도 : {weather?.main.humidity}%</h3>
      <h3>풍속 : {weather?.wind.speed}/s</h3>
    </div>
  )
}

export default WeatherInfo;
