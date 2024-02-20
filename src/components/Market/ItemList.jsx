import { Container } from "react-bootstrap"
import Item from "./Item"


const ItemList = ({ products }) => {
  return (
    <>
      <Container>
        {products.map((product) => (<Item key={product.id} product={product} />))}
      </Container>
    </>
  )
}
export default ItemList