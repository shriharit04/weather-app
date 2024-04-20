import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./CompareCities/CompareCities.css"
function App() {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip}
			flipDirection="horizontal">
			<div className="card">
				Welcome to GFG.
				<br />
				<br />
				<button style={{
					width: '150px',
					padding: '10px',
					fontSize: '20px',
					background: '#f5d9fa',
					fontWeight: 'bold',
					borderRadius: '5px'
				}} onClick={() => setFlip(!flip)}>
					Flip</button>
			</div>
			<div style={{
				width: '300px',
				height: '200px',
				background: '#fbd7f8',
				fontSize: '40px',
				color: 'blue',
				margin: '20px',
				borderRadius: '4px',
				textAlign: 'center',
				padding: '20px'
			}}>
				Computer Science Portal.
				<br />
				<button style={{
					width: '150px',
					padding: '10px',
					fontSize: '20px',
					background: '#f5d9fa',
					fontWeight: 'bold',
					borderRadius: '5px'
				}} onClick={() => setFlip(!flip)}>
					Flip</button>
			</div>
		</ReactCardFlip>
	);
}

export default App;
