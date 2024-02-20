import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import "../../styles/Item.css"

const Item = ({ product }) => {
  return (
    <div className="Item">
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={product.pictureURL} className="ItemImage"/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <ItemCount stock={product.stock} id={product.id}/>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Item