import React from 'react';
  // Importing the CSS file

function Card(props) {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>{props.headings[0]}</h2>
            </div>
            <div className="card-body">
            <h1><span id="temp">{props.data[0]} </span><small>{props.unit}</small></h1>
                <ul>
                    <li>{props.headings[1]} : {props.data[1]}</li>
                    <li>{props.headings[2]} : {props.data[2]}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
