import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MovieCard = (props) => {

  const { tittle, director, year, duration, image } = props.movie

  return (
    <div>
{/*       <div>{tittle}</div>
      <div>{director}</div>
      <div>{duration}</div>
      <div>{year}</div> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{director}</ListGroup.Item>
          <ListGroup.Item>{duration}</ListGroup.Item>
          <ListGroup.Item>{year}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
export default MovieCard