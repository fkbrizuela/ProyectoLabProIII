import { useState } from "react"

const MapComponent = () => {
  const [products, setProducts] = useState([])

  setTimeout(() => {
    setProducts([
      { id: 1, name: 'string', description: 'string', stock: 'number' },
      { id: 2, name: 'string', description: 'string', stock: 'number' },
      { id: 3, name: 'string', description: 'string', stock: 'number' }
    ])
  }, 5000);

  return (
    <>
      <h1>MapComponent</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <h3>
              {products.name}
            </h3>
          </li>
        ))}
      </ul>
    </>
  )
}
export default MapComponent