import React from 'react';
import './App.css';
import SortableTable from './SortableTable';

function App() {
  const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Doe', age: 40, city: 'Chicago' },
    // Add more data items as needed
  ];

  return (
    <div className="App">
      <h1>Sortable Table</h1>
      <SortableTable data={data} />
    </div>
  );
}

export default App;