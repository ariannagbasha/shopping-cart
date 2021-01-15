import { Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand as={NavLink} to='/'>
          Awesome Shop
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Link to='/'>Home</Link>
          </Navbar.Text>
          <Navbar.Text>
             | 
          </Navbar.Text>
          <Navbar.Text>
            <Link to='/store'>Store</Link>
          </Navbar.Text>
          <Navbar.Text>
             | 
          </Navbar.Text>
          <Navbar.Text>
            <Link to='/cart'>Cart</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
