import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const MovieCard = (props) => {

  const { id, tittle, director, year, duration, image } = props.movie

  return (
    <div>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
{/*           <Card.Text>
            Some quick example
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{director}</ListGroup.Item>
          <ListGroup.Item>{duration}</ListGroup.Item>
          <ListGroup.Item>{year}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/Peliculas/${id}`} className='btn btn-primary'>ver</Link>
        </Card.Body>
      </Card>
    </div>
  )
}
export default MovieCard