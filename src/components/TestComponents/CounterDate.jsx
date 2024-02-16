import React from 'react';
import { useState } from 'react';

const CounterDate = () => {
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(' - ');
	/*const date = new Date();*/
	const handleClick = () => {
		setCount(count + 1);
		setDate(new Date());
	};

	return (
		<div style={{ border: '1px solid black', cursor: 'pointer' }}>
			<h4>Cantidad de clicks {count}</h4>
			<p>Fecha: {date.toLocaleString()} </p>
			<button
				onClick={() => {
					handleClick();
				}}
			>
				click
			</button>
		</div>
	);
};
export default CounterDate;