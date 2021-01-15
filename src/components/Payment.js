import { Card, Form, Col } from 'react-bootstrap';

export function PaymentDetails(props) {
  return (
    <>
    <Col>
      <Card>
        <Card.Title>Payment Details</Card.Title>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Card>
      </Col>
    </>
  );
}
