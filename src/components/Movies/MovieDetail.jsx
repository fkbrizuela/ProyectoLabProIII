import { useParams } from 'react-router-dom';
import { moviesData } from '../../data/moviesData'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const MovieDetail = () => {


  const [movie, setMovie] = useState({})
  const { movieId } = useParams()
  console.log(movieId);
  useEffect(() => {
    setMovie(moviesData.find(m => m.id == movieId))
  }, [movieId])

  return (
    <>
      <div>MovieDetail {movieId}</div>
      <Container>
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src={movie.image} />
          <Card.Body>
            <Card.Title>{movie.tittle}</Card.Title>
{/*             <Card.Text>
              Some quick example
            </Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{movie.director}</ListGroup.Item>
            <ListGroup.Item>{movie.duration}</ListGroup.Item>
            <ListGroup.Item>{movie.year}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <Link to={`/Peliculas`} className='btn btn-primary'>volver</Link>
        </Card.Body>
        </Card>
      </Container>

    </>

  )
}
export default MovieDetail