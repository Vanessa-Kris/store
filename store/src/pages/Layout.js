import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  >
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="./logo.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Stunners Galleria
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
          <Link className="px-2" to="/">Home</Link>
          <Link className="px-2" to="/about">About</Link>
          <Link className="px-2" to="/contact">Contact</Link>
          <Link className="px-2" to="/shop">Shop</Link>
          <Link className="px-2" to="/faq">FAQs</Link>
          <Link className="px-2" to="/policy">Store Policy</Link>
          <Link className="px-2" to="/testimonials">Testimonials</Link>
          <Link className="px-2" to="/booking">Booking</Link>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="shop">Shop</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Store Policy</Nav.Link>
            <Nav.Link href="#pricing">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Booking</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Outlet />

      <footer className= "text-center fixed-bottom p-3" style={{ background: '#0001', height: '50px', position: 'relative' }}> ©2023 by Stunners. </footer>
    </>
  )
};

export default Layout;
