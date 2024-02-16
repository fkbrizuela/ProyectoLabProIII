import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial /* onAdd */ }) => {
	const [count, setCount] = useState(initial)

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
		if (count != 0) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<div>Counter</div>
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