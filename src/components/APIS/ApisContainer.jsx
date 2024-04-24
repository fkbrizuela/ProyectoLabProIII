import { useEffect, useState } from "react"
import StarshipDetail from "./StarshipDetail"


const ApisContainer = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    getStarships()
  }, [])

  //función que se encarga de hacer las peticiones fetch
  const getStarships = () => {
    const URL = 'https://swapi.dev/api/starships'

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setStarships(data.results)
      })
  }
console.log(starships);

  return (
    <>
      {starships.map( s => <StarshipDetail key={s.url} starship = {s} />)}
    </>
  )
}
export default ApisContainer