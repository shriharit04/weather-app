import React from 'react';
import dropDownImg from "../assets/dropDown.png";
import './TabularData.css';

function Recents(props) {
  const data = props.data;
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortedProducts = [...data]; // Copying the data array

    if (sortConfig.key !== null) {
      sortedProducts.sort((a, b) => {
        let valueA, valueB;

        // For nested properties
        if (sortConfig.key.includes('.')) {
          const keys = sortConfig.key.split('.');
          valueA = a[keys[0]][keys[1]];
          valueB = b[keys[0]][keys[1]];
        } else {
          valueA = a[sortConfig.key];
          valueB = b[sortConfig.key];
        }

        if (valueA < valueB) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortedProducts;
  }, [data, sortConfig]);

  return (
    <div className="recent">
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort("city")}>City</th>
            <th onClick={() => requestSort("tableData.coord.lon")}>Longitude</th>
            <th onClick={() => requestSort("tableData.coord.lat")}>Latitude</th>
            <th onClick={() => requestSort("datas[0]")}>Temperature °C</th>
            <th onClick={() => requestSort("tableData.main.feels_like")}>Feels like °C</th>
            <th onClick={() => requestSort("tableData.main.temp_min")}>Temp min °C</th>
            <th onClick={() => requestSort("tableData.main.temp_max")}>Temp max °C</th>
            <th onClick={() => requestSort("tableData.main.pressure")}>pressure (hPa)</th>
            <th onClick={() => requestSort("datas[1]")}>Humidity</th>
            <th onClick={() => requestSort("datas[2]")}>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((city, index) => {
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
