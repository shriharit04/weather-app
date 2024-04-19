import React, { useState } from 'react'
// import searchIcon from '../assets/search.png' 
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'



function CompareCard(props) {
  const [showCity, setShowCity] = useState(true)
  const [wIcon, setWIcon] = useState(cloudIcon)
  
  const handleShowCity = (e) =>{
    e.preventDefault();
    setShowCity(!showCity);
  };

  const UpdateIcon = (code) =>{
    console.log(code);
    return `https://openweathermap.org/img/wn/${code}@4x.png`
    if(code ==="01d" || code ==="01n"){
      return clearIcon;
    }else if(code ==="02d" || code ==="02n"){
      return cloudIcon;
    }else if(code ==="03d" || code ==="03n"){
      return cloudIcon;
    }else if(code ==="04d" || code ==="04n"){
      return cloudIcon;
    }else if(code ==="09d" || code ==="09n"){
      return rainIcon;
    }else if(code ==="10d" || code === "10n"){
      return drizzleIcon;
    }else if(code === "13d" || code === "13n"){
      return snowIcon;
    }else{
      return `https://openweathermap.org/img/wn/${code}@4x.png`
    }
  };


  const weatherIcon = UpdateIcon(props.code);
    
  return (
    <>
    {showCity && <div className="container" onContextMenu ={(e)=>handleShowCity(e)}>
    <div className="weather-location">{props.cityName}</div>
    <div className="weather-img">
      <img src={weatherIcon} alt="CloudiCOn" />
    </div>
    <div className="weather-temp">{props.tempDatas[0]}°C</div>
    <div className="data-container">
      <div className="element">
        <img src={humidityIcon} alt="" className='icon' style={{height: "40px",width :"40px"}}/>
        <div className="data">
          <div className="humidity">{props.tempDatas[1]}</div>
          <div className="text">humidity</div>
        </div>
      </div>

      <div className="element">
        <img src={windIcon} alt="" className='icon' style={{height: "40px",width :"40px"}}/>
        <div className="data">
          <div className="humidity">{props.tempDatas[2]}</div>
          <div className="text">WindSpeed</div>
        </div>
      </div>

      
    </div>
  </div>}
  
  {!showCity && <button className="weather-location-remove" onContextMenu ={(e)=>handleShowCity(e)} onClick={() => props.handleCity(props.cityName,0)}>Remove?</button>}
    </>
  )
}

export default CompareCard
