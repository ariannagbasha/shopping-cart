import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import * as PAGES from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <Container fluid>
      <Header />
      <Container>
        <Switch>
          <Route path='/' component={PAGES.Home} />
          {/* Cart is component for Store page */}
          <Route path='/store' component={PAGES.Cart} />
          <Route path='/cart' component={PAGES.Checkout} />
          <Route path='*' component={PAGES.NotFound} />
        </Switch>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
