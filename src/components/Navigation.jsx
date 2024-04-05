import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container className='d-flex flex-md-row-reverse'>
        <Navbar.Brand href="#home" className='text-white'>HAPPY CAKE 🍰 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='text-white text-decoration-none'>🏠 Home</Link>
            <Link to="/contacto" className='text-white text-decoration-none'>📙 Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;