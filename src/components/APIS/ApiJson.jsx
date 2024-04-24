//import { useState, useEffect } from 'react'
import { useFetch } from "../../Hooks/useFetch"

const ApiJson = () => {
  //const [data, setData] = useState([])

  //const Url = 'https://jsonplaceholder.typicode.com/users'
  //const UrlLocal = 'http://localhost:5000/Santos'

  /*  const getData = (Url) => {
      const UrlLocal = 'http://localhost:5000/Santos'
      fetch(UrlLocal)
        .then(response => response.json())
        .then((data) => {
          setData(data)
        })
        return data
    }*/

/*   useEffect(() => {
    // getData()
    const Url = 'https://jsonplaceholder.typicode.com/users'
    const UrlLocal = 'http://localhost:5000/Santos'

    fetch(Url)
      .then(response => response.json())
      .then((data) => {
        setData(data)
      })
  }, []) */

  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(data);
  return (
    <>
      <h2>ApiJson</h2>
      <ul>
        {error && <li>Error: {error}</li> }
        {loading && <li>Loading...</li>}
        {data.map(el => <li key={el.id} >{el.name}</li>)}
      </ul>
    </>
  )
}
export default ApiJson