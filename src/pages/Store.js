import { useState } from 'react';

import { Card, Form, Row, Col } from 'react-bootstrap';
import { PriceCard } from '../components';

export function Store() {
  const [button, setButton] = useState('Any Price');

  return (
    <Row>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Price</Card.Title>
            <Form>
              <Form.Check
                type='radio'
                id={1}
                label='Any Price'
                checked={button === 'Any Price'}
                onChange={() => setButton('Any Price')}
              />
              <Form.Check
                type='radio'
                id={2}
                label='Under $25'
                checked={button === 'Under $25'}
                onChange={() => setButton('Under $25')}
              />
              <Form.Check
                type='radio'
                id={3}
                label='$25 to $100'
                checked={button === '$25 to $100'}
                onChange={() => setButton('$25 to $100')}
              />
              <Form.Check
                type='radio'
                id={4}
                label='$100 to $500'
                checked={button === '$100 to $500'}
                onChange={() => setButton('$100 to $500')}
              />
              <Form.Check
                type='radio'
                id={5}
                label='Over $500'
                checked={button === 'Over $500'}
                onChange={() => setButton('Over $500')}
              />
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <h3>Products</h3>
        <PriceCard />
      </Col>
    </Row>
  );
}
