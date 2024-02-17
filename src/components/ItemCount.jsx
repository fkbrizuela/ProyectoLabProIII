import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock,  /* onAdd */ }) => {
	const [count, setCount] = useState(1)

	useEffect(() => {
		console.log('El componente se montó')
	}, [])

	useEffect(() => {
		console.log('El componente cambió el estado')
	}, [count])

	const addHandler = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}

	const lessHandler = () => {
		if (count != 1) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<h5>Counter</h5>
			<Button onClick={addHandler} variant="success">+</Button>
			{count}
			<Button onClick={lessHandler} variant="danger">-</Button>
			<div>
				<Button>Agregar al carrito</Button>
			</div>
		</>

	)
}
export default ItemCount 