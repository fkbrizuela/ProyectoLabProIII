import { moviesData } from '../../data/moviesData'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import { Container } from 'react-bootstrap'

const MoviesList = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies() //define una promesa que se resuelve 2seg despues y al ser resuelta manda moviesData que proviene de un json
  }, [])

  const getMovies = () => {
    //creamos una nueva promesa
    const getMoviesPromise = new Promise((resolve, reject)=>{
      setTimeout(()=>{                       //al esperar que se resuelva la promesa despues de 2segundos  
        resolve( moviesData )               //se resuelve obteniendo moviesData
      }, 0)
    })
    getMoviesPromise.then( data =>{
      setMovies( data )
    })
  }

  return (
    <div>
      <Container>
        {movies.map( m => <MovieCard key={m.id} movie ={m}/> )}
      </Container>
    </div>
  )
}
export default MoviesList