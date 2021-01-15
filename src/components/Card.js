import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'

export function PriceCard (props) {

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Price</Card.Text>
    </Card.Body>
    <Button> Add to Cart</Button>
    </Card>

    )
}