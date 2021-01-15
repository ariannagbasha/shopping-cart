import { Card, Form, Col, Button } from 'react-bootstrap';

export function PaymentDetails(props) {
  return (
    <>

      <Card>
        <Card.Title>Payment Details</Card.Title>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter  Name' />

          </Form.Group>
          <Button variant="primary" type="submit">
             Complete Checkout
        </Button>
        </Form>

      </Card>
    </>
  );
}
