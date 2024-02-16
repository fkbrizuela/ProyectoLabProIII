import { useState } from "react"
import ItemList from "./ItemList"

const products = [
    {id: 1, name:'string', description:'string', stock:'number'},
    {id: 2, name:'string', description:'string', stock:'number'},
    {id: 3, name:'string', description:'string', stock:'number'}
]

const ItemListContainer = ({greeting}) => {
    const [load, setLoad] = useState('Cargando...') 

    setTimeout(()=>{
        setLoad('carga completa')
    },2000)

    return (
        <div className="ContainerMain">
            <h1>Lista de Productos</h1>
            <p>{greeting}</p>
            <h2>{load}</h2>
            <ItemList products ={products}/>
        </div>
    )
}
export default ItemListContainer