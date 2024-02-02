import React, { useEffect, useState } from 'react';
import './App.css';
import SearchLocation from './component/SearchLocation';
import WeatherInfo from './component/WeatherInfo';
import WeatherBtn from './component/WeatherBtn';
import Time from './component/Time';

function App() {
  const [weather, setWeather] = useState(null); 
  const [city, setCity] = useState('');
  const [showStars, setShowStars] = useState(false);
  const [showSnows, setShowSnows] = useState(false);
  const [showRain, setShowRain] = useState(false);
  const [showThunder, setShowThunder] = useState(false);
  const [showClouds, setShowClouds] = useState(false);
  const [showSun, setShowSun] = useState(false);

  const cities=['Jeju','Busan','Seoul','Tokyo','New York','London','Paris'];

  const currentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      
      let lat = position.coords.latitude;
      let longi = position.coords.longitude;

      weatherInfo(lat,longi);
    });
  };

  const weatherInfo = async(lat,lon)=> {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=cf0ad41ef4e83f85c69d1f76668f7c61`;
    let response = await fetch(url);
    let data = await response.json();
    
    //이는 특히 비동기 작업을 처리할 때 React가 상태를 올바르게 업데이트하도록 보장합니다.
    setWeather(prevWeather => data);
  }

  const weatherCity = async() =>{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf0ad41ef4e83f85c69d1f76668f7c61&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    if (city === '') {
      currentLocation();
    } else {
      weatherCity();
    }
  }, [city]);

  const appStyle = (weather) => {
    if (weather && weather.weather && weather.weather.length > 0 && weather.weather[0].id.toString()[0] === '2') {
      return {
        background: `linear-gradient(0deg, rgba(15,50,106,1) 0%, rgba(253,187,45,1) 100%);`,
      };
    }else if (weather && weather.weather && weather.weather.length > 0 && weather.weather[0].id.toString()[0] === '5') {
      return {
        background: `linear-gradient(0deg, rgba(207,214,225,1) 0%, rgba(0,91,120,1) 100%)`,
      };
    }else if (weather && weather.weather && weather.weather.length > 0 && weather.weather[0].id.toString()[0] === '6') {
      return {
        background: `linear-gradient(0deg, rgba(207,214,225,1) 0%, rgba(230,249,255,1) 100%)`,
      };
    } else if (weather && weather.weather && weather.weather[0].id === 800) {
      return {
        background: `linear-gradient(180deg, rgba(2,121,200,1) 0%, rgba(65,145,216,1) 35%, rgba(117,177,232,1) 100%)`,
      };
    }else if (weather && weather.weather && weather.weather.length > 0 && weather.weather[0].id.toString()[0] === '7' || weather && weather.weather && weather.weather.length > 0 && weather.weather[0].id.toString()[0] === '8'|| weather && weather.weather && weather.weather.length > 0 && weather.weather[0].id.toString()[0] === '9') {
      return {
        background: `linear-gradient(0deg, rgba(207,214,225,1) 0%, rgba(116,155,168,1) 100%)`,
      };
    } else {
      return {
        background: `linear-gradient(180deg, rgba(2,121,200,1) 0%, rgba(65,145,216,1) 35%, rgba(117,177,232,1) 100%)`,
      };
    }
  }

  return (
    <div className="App" style={appStyle(weather)}>
      <SearchLocation setCity={setCity} city={city}/>
      <WeatherInfo weather={weather}/>
      <WeatherBtn cities={cities} setCity={setCity} setShowStars={setShowStars} setShowRain={setShowRain} setShowClouds={setShowClouds} setShowSnows={setShowSnows} showThunder={showThunder} setShowThunder={setShowThunder} showSun={showSun} setShowSun={setShowSun} />
      <Time weather={weather} showStars={showStars} setShowStars={setShowStars} showRain={showRain} setShowRain={setShowRain} showClouds={showClouds} setShowClouds={setShowClouds} showSnows={showSnows} setShowSnows={setShowSnows} showSun={showSun} setShowSun={setShowSun} showThunder={showThunder} setShowThunder={setShowThunder}/>
    </div>
  );
}

export default App;
