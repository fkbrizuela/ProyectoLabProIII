import { useEffect, useState } from "react"
import StarshipDetail from "./StarshipDetail"


const ApisContainer = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    getStarships()
  }, [])

  useEffect(() => {
    getPokemon()
  }, [])

  //función que se encarga de hacer las peticiones fetch
  const getStarships = () => {
    const URL = 'https://swapi.dev/api/starships'

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.results)
        setStarships(data.results)
      })
  }

  const getPokemon = () => {
    const URL2 = 'https://pokeapi.co/api/v2/pokemon'

    fetch(URL2)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        console.log(data.results);
        data.results.forEach(element => {
          console.log(element.name);
        });
      })
  }

  return (
    <>
      {starships.map( s => <StarshipDetail key={s.url} starship = {s} />)}
    </>
  )
}
export default ApisContainer