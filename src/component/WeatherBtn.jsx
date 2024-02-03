import React from "react";

const WeatherBtn = ({cities,setCities,setCity,setShowStars,setShowRain,setShowClouds,setShowSnows,setShowSun,setShowThunder}) =>{

  const handleCityClick = (city) => {
    setCity(city);
    setShowStars(() => false); 
    setShowSnows(() => false); 
    setShowRain(() => false); 
    setShowClouds(() => false); 
    setShowSun(() => false); 
    setShowThunder(() => false); 
  };

  const handleDelete = (e) => {
    let index = parseInt(e.target.parentElement.getAttribute("id"), 10); 
    console.log("🚀 ~ handleDelete ~ index:", index)
    const newCities = cities.filter((_, i) => i !== index); 
    if(window.confirm(`글을 정말 삭제하시겠습니까?`)){
      setCities(newCities); 
    }
  };
  

  return(
    <div className="weatherbtn">
      <div className="btn"><button onClick={()=>setCity('')}>현재위치</button></div>
      {
        cities.map((e, index) => (
          <div className="btn" key={index} id={index}>
            <button onClick={() => handleCityClick(e)}>{e} </button>
            <span onClick={handleDelete}>&#10007;</span>
          </div>
        ))
      }
    </div>
  )
}

export default WeatherBtn;