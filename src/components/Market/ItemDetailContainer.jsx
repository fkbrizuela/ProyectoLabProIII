import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getProduct } from "../../data/products";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

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
        <ItemDetail product = {product}/>
      </Container>
    </div>
    
  )
}
export default ItemDetailContainer