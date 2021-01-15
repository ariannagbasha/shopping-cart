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
          <Route path='/cart' component={PAGES.Cart} />
          <Route path='/checkout' component={PAGES.Checkout} />
          <Route path='/product' component={PAGES.Product} />
          <Route path='*' component={PAGES.NotFound} />
        </Switch>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
