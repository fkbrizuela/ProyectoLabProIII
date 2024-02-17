import { useState } from "react"
import ItemList from "./ItemList"

const products = [
    {id: 1, name:'string', description:'string', stock:5},
    {id: 2, name:'string', description:'string', stock:10},
    {id: 3, name:'string', description:'string', stock:7},
    {id: 4, name:'string', description:'string', stock:6},
    {id: 5, name:'string', description:'string', stock:4},
    {id: 6, name:'string', description:'string', stock:2},
    {id: 7, name:'string', description:'string', stock:9},
    {id: 8, name:'string', description:'string', stock:5}
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
            <h3>ItemList</h3>
            <ItemList products ={products}/>
        </div>
    )
}
export default ItemListContainer