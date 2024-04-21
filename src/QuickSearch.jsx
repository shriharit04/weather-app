import { useState } from 'react';
import './QuickSearch.css';
import Card from './Card';

function QuickSearch() {
  const [tempData, setTempData] = useState([0, 0, 0]);
  const [humidityData, setHumidityData] = useState([10, 10, 0]);
  const [windData, setWindData] = useState([0, 0, 0]);
  const [city, setCity] = useState('Delhi');
  
  const tempHeadings = ["Temperature", "Min Temp", "Max Temp"];
  const humidityHeadings = ["Humidity", "Cloud PCT", "Feels like"];
  const windHeadings = ["Wind Speed", "Sunrise", "Sunset"];

  const apiKey = "161d920583mshe0f1481088e3443p1f7425jsn929b90b78865"; 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  const getWeather = (e) => {
    e.preventDefault();
    const cityName = document.getElementById('city').value;
    setCity(cityName);

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setTempData([response.temp, response.min_temp, response.max_temp]);
        setHumidityData([response.humidity, response.cloud_pct, response.feels_like]);
        setWindData([response.wind_speed, response.sunrise, response.sunset]);
      })
      .catch(err => {
        console.error(err)});
  };

  return (
    <>
      <form role="search" onSubmit={getWeather}>
        <input placeholder='Search' type="search" id="city" />
        <button type='submit'>Submit</button>
      </form>

      
      <h1 className="mainHead">Weather for {city}</h1>
      
      <div className="cards">

        <Card headings={tempHeadings} unit="C" data={tempData} />
        <Card headings={humidityHeadings} unit="%" data={humidityData} />
        <Card headings={windHeadings} unit="km/hr" data={windData} />
      </div>
    </>
  );
}

export default QuickSearch;
