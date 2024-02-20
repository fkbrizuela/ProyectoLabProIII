import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock,  id }) => {
	const [count, setCount] = useState(1)

/* 	useEffect(() => {
		console.log('El componente se montó')
	}, [])

	useEffect(() => {
		console.log('El componente cambió el estado')
	}, [count]) */

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
				<Link>
					<Button>Agregar al carrito</Button>
				</Link>
				<Link to={`/Item/${id}`}>
					<Button variant="outline-light">Detalle del producto</Button>
				</Link>
			</div>
		</>

	)
}
export default ItemCount 