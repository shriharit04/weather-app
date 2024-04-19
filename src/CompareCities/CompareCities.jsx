import React, { useState } from 'react'
import CompareCard from './CompareCard'
import './CompareCities.css'
import NewCard from './NewCard';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'space-around',
  overflow: 'hidden',
  backgroundColor: '#f2f2f2',
};


function CompareCities() {  
  const [myCities,setMyCities] = useState([ {city:"Delhi",datas:[14,24,30],code:"01d"},
                                            {city:"London", datas:[10,60,40],code:"11n"}
  ]);
  
  const handleCity = async(cityName, action) => {
    if (action === 1) {
      const data = await GetWeatherData(cityName)
      console.log(data)
      setMyCities(prevCities => [...prevCities, data]);
    } else if (action === 0) {
      // Remove city from myCities
      setMyCities(prevCities => prevCities.filter(city => city.city !== cityName));
    }
  };

  const GetWeatherData = async(cityName)=>{
    const apiKey = "e1a61a7b32d0c31c60393ed4674bc7c0"
    let data = {};
    if(cityName===""){
      alert("Enter proper city name");
     data = {city:"undefined",datas: [0,0,0],code :"01d"};
    }else{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&&units=Metric`
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        const vals = [responseData.main.temp, responseData.main.humidity, responseData.wind.speed];
        console.log(vals);
        data = { city: cityName, datas: vals, code: responseData.weather[0].icon };

      }catch(err){
        alert("Enter proper city name");
        data = { city: "undefined", datas: [0, 0, 0],code:"01d" };
      }
    }
    return data;
  }

  
  return (
    <div style={style}>
      {myCities.map((city, index) => {
        console.log(city);
        return <CompareCard key={index} cityName={city.city} tempDatas={city.datas} code = {city.code}handleCity = {handleCity} />;
      })}  
      <NewCard handleCity = {handleCity}></NewCard>

    

    </div>
  )
}

export default CompareCities
