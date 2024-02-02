import React, { useState,useRef  } from "react";

const SearchLocation = ({setCity,city,search,setSearch}) => {

  const InputFocus = useRef();

  const handleSearchBtn = async () => {
    try {
      let weather_url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf0ad41ef4e83f85c69d1f76668f7c61&units=metric`;
      const response = await fetch(weather_url);
      const data = await response.json();
  
      if (data.cod && data.cod === '404') {
        InputFocus.current.focus();
        return;
      } else {
        setCity(search);
      }
    } catch (error) {
      InputFocus.current.focus();
      return;
    }

    if(search===''){
      InputFocus.current.focus();
      return;
    }else{
      setCity(search);
    }

    setSearch('');
  }
  
  return (
    <div className="searchlocation">
      <input type="text" name="search" id="search" placeholder="도시를 입력하세요." value={search} ref={InputFocus} onChange={(e) => { setSearch(e.target.value) }} />
      <button onClick={() => handleSearchBtn()}>검색</button>
    </div>
  );
  
}

export default SearchLocation;