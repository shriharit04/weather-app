import React from 'react';
import dropDownImg from "../assets/dropDown.png";
import './TabularData.css';

function Recents(props) {
  const data = props.data;
  return (
    <div className="recent">
      <h1>More Information</h1>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Temperature °C</th>
            <th>Feels like °C</th>
            <th>Temp min °C</th>
            <th>Temp max °C</th>
            <th>pressure (hPa)</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((city, index) => {
            return (
              <tr key={index}>
                <td>{city.city}</td>
                <td>{city.tableData.coord.lon}</td>
                <td>{city.tableData.coord.lat}</td>
                <td>{city.datas[0]}</td>
                <td>{city.tableData.main.feels_like}</td>
                <td>{city.tableData.main.temp_min}</td>
                <td>{city.tableData.main.temp_max}</td>
                <td>{city.tableData.main.pressure}</td>
                <td>{city.datas[1]}</td>
                <td>{city.datas[2]}</td>
                <td><img src={dropDownImg} width="20" height="20" alt="view more" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Recents;
