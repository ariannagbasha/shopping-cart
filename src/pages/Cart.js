import { PriceCard } from '../components/Card'
import { PaymentDetails } from '../components/Payment'
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
