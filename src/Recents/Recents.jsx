import React from 'react'
import dropDownImg from "../assets/dropDown.png"
function Recents(props){
  return (
    <div className="recent">
      <table>
        <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
        </tr>
        {props.data.map((city,index) => {
          return (
            <tr key={index}>
              <td>{city.city}</td>
              <td>{city.datas[0]}</td>
              <td>{city.datas[1]}</td>
              <td>{city.datas[2]}</td>
              <td><img src={dropDownImg} width="20" height="20"alt="view more" /></td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default Recents
