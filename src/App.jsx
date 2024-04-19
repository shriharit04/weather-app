import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import QuickSearch from './QuickSearch';
import About from './About/About';
import CompareCities from './CompareCities/CompareCities';
function App() {
  const [visibleComponents, setVisibleComponents] = useState({
    home: true,
    about: false,
    qw :false,
    compareCities : false,
    pastHistory : false,
    nicestClimate : false
  });


  const toggleComponent = (componentName) => {
    setVisibleComponents(prevState => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === componentName ? true : false;
        return acc;
      }, {})
    }));
  };

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


  return (
    <div className="App">
      <header className="header">
        <h1>Weather App</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li className="navbar-button"><button onClick={()=> toggleComponent('home')}>Home</button></li>
          <li className="navbar-button"><button onClick={()=> toggleComponent('about')}>About</button></li>
          <li className="navbar-button"><button onClick={()=> toggleComponent('qw')}>Quick Weather</button></li>
          <li className="navbar-button"><button onClick={()=> toggleComponent('compareCities')}>Compare Cities</button></li>
          <li className="navbar-button"><button onClick={()=> toggleComponent('pastHistory')}>Past History</button></li>
          <li className="navbar-button"><button onClick={()=> toggleComponent('nicestClimate')}>Nicest Climate</button></li>
        </ul>
      </nav>


      {visibleComponents.home && <Home/>}
      {visibleComponents.about && <About/>}
      {visibleComponents.qw && <QuickSearch/>}
      {visibleComponents.compareCities && <CompareCities />}
    </div>
  );
}
export default App;
