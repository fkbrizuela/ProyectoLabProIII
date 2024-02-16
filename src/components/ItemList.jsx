import { Container } from "react-bootstrap"
import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <>
      <Container>
        {products.map((product) => (<Item key={product.id} name={product.name} />))}
      </Container>
    </>
  )
}
export default ItemList