import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Item = ({ product }) => {
  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <ItemCount stock={product.stock} /* initial={1} *//>
        </Card.Body>
      </Card>
    </>
  )
}
export default Item