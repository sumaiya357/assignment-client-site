import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  './Header.css'

import logo from '../../Asset/logo.png'

  

const Header = () => {
    return (
       
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     
      <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        
        <Navbar.Brand href="#home">The Course School </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
        
            
          </Nav>
        <Nav  >
            <Link className='text-decoration-none text-white me-3' to='/login'>Login</Link>
            <Link className='text-decoration-none text-white' to='/register'>Register</Link>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    );
};

export default Header;