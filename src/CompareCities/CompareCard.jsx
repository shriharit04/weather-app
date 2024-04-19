import React from 'react'
import searchIcon from '../assets/search.png' 
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'


function CompareCard(props) {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="search" className = "cityInput" placeholder='Search' />
        <div className="search-icon">
          <img src={searchIcon}alt='Search ico n'/>
        </div>
      </div>

      <div className="weather-img">
        <img src={cloudIcon} alt="CloudiCOn" />
      </div>
      <div className="weather-temp">24C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className='icon' style={{height: "40px",width :"40px"}}/>
          <div className="data">
            <div className="humidity">64%</div>
            <div className="text">humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={windIcon} alt="" className='icon' style={{height: "40px",width :"40px"}}/>
          <div className="data">
            <div className="humidity">12kmph</div>
            <div className="text">WindSpeed</div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default CompareCard
