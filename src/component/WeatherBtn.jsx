import React from "react";

const WeatherBtn = ({cities,setCity,setShowStars,setShowRain,setShowClouds,setShowSnows,setShowSun,setShowThunder}) =>{

  const handleCityClick = (city) => {
    setCity(city);
    setShowStars(() => false); 
    setShowSnows(() => false); 
    setShowRain(() => false); 
    setShowClouds(() => false); 
    setShowSun(() => false); 
    setShowThunder(() => false); 
  };

  return(
    <div className="weatherbtn">
      <div className="btn"><button onClick={()=>setCity('')}>현재위치</button></div>
      {
        cities.map((e, index) => (
          <div className="btn" key={index}><button onClick={() => handleCityClick(e)}>{e}</button></div>
        ))
      }
    </div>
  )
}

export default WeatherBtn;