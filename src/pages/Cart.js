import { PriceCard } from '../'
import { PaymentDetails } from '../'
import { Col, Row } from 'react-bootstrap'

export function Cart() {
  return (
    <Row>
    <Col>
      <PriceCard/>
      <PriceCard/>
    </Col>
    <Col>
    <PaymentDetails />
    </Col>
    </Row>
  );
}
