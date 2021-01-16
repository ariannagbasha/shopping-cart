import { Card, Button } from 'react-bootstrap';

export function PriceCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        style={{ width: '80%', height: '30vh', margin: '2vh auto auto auto' }}
        src='./hair.jpg'
      />
      <Card.Body>
        <Card.Title>Rogaine
        <Card.Text>$1,000,000</Card.Text>
      </Card.Body>
      <Button> Add to Cart</Button>
    </Card>
  );
}
