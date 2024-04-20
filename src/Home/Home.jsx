import React from 'react';
import './TabularData.css';
import SortableTable from './SortableTable';

function TabularData(props) {
  const data = props.data

  return (
    <div className="TabularData">
      <h1>Sortable Table</h1>
      <SortableTable data={data} />
    </div>
  );
}

export default TabularData;