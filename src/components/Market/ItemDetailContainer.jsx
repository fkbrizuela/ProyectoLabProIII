import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getProduct } from "../../data/products";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])



  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data)
      })
  }, [id])

  console.log(product);

  useEffect(() => {
    console.log(id);
  }, [id])

  /* setProduct(product.filter((p)=>{p.id === id})) */

  return (
    <div>
      <h2>Detalle del producto</h2>
      <Container>
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
        </Card.Body>
        <Link to={`/Productos`} className='btn btn-primary'>volver</Link>
      </Card>
      </Container>
    </div>
    
  )
}
export default ItemDetailContainer