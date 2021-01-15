import { PriceCard } from '../components/Card'
import { PaymentDetails } from '../components/Payment'
import { Col } from 'react-bootstrap'

export function Cart() {
  return (
    <>
    <Col>
      <PriceCard/>
      <PriceCard/>
    </Col>

    <PaymentDetails />
    </>
  );
}
