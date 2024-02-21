import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <div>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={product.pictureURL} className="ItemImage" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
        <Link to={`/Productos`} className='btn btn-primary'>volver</Link>
      </Card>
    </div>
  )
}
export default ItemDetail