import React, { useState } from "react";
import weatherDescKo from "./weatherDescKo";

const WeatherInfo = ({weather})=>{
  const [isTranslated, setIsTranslated] = useState(false);

  const translateWeatherDescription = (id) => {
    const translation = weatherDescKo.find(item => Object.keys(item)[0] === id.toString());
    return translation ? Object.values(translation)[0] : 'Unknown';
  };

  const handleTranslate = () => {
    setIsTranslated(!isTranslated);
  }

  return(
    <div className="weatherinfo">
      <h2>{weather?.name}</h2>
      <h3>{(weather?.main?.temp)?.toFixed(2)}°C{' '}°C <span style={{marginLeft:10}}>  {(weather?.main?.temp * 1.8 + 32)?.toFixed(2)}°F</span></h3>
      <h3>{Math.floor(weather?.main.temp)}°C <span style={{marginLeft:10}}> {Math.floor(weather?.main.temp * 1.8 + 32)}°F</span></h3>
      <h3>{isTranslated ? translateWeatherDescription(weather?.weather[0]?.id) : weather?.weather[0]?.description}</h3>
      <h3>최고온도 : {weather?.main.temp_max}</h3>
      <h3>최저온도 : {weather?.main.temp_min}</h3>
      <h3>습도 : {weather?.main.humidity}%</h3>
      <h3>풍속 : {weather?.wind.speed}/s</h3>
      <div><button onClick={handleTranslate}>{isTranslated ? '영어로 보기' : '한국어로 번역하기'}</button></div>
    </div>
  )
}

export default WeatherInfo;
