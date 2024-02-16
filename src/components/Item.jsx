import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ name }) => {
  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default Item