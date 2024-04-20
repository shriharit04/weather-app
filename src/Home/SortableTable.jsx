import React, { useState } from 'react';

const SortableTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort('name')}>
            Name
            {sortConfig.key === 'name' && (
              sortConfig.direction === 'ascending' ? ' ⬆️' : ' ⬇️'
            )}
          </th>
          <th onClick={() => requestSort('age')}>
            Age
            {sortConfig.key === 'age' && (
              sortConfig.direction === 'ascending' ? ' ⬆️' : ' ⬇️'
            )}
          </th>
          <th onClick={() => requestSort('city')}>
            City
            {sortConfig.key === 'city' && (
              sortConfig.direction === 'ascending' ? ' ⬆️' : ' ⬇️'
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
