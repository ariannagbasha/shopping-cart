import { Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand as={NavLink} to='/'>
          Kapstone
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Link to='/login'>Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
