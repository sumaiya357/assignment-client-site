import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  './Header.css'
import { FaUserAlt } from "react-icons/fa";
import logo from '../../Asset/logo.png'
import { AuthContext } from '../../Context/AuthProvider';
import { Image } from 'react-bootstrap';

  

const Header = () => {
    
  const {user} = useContext(AuthContext);
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
          <Nav className="me-auto ">
            <Link  className='text-decoration-none text-white me-3' to='/'>Home</Link>
            <Link  className='text-decoration-none text-white me-3' to='/courses'>Courses</Link>
            <Link  className='text-decoration-none text-white me-3' to='/FAQ'>FAQ</Link>
            <Link  className='text-decoration-none text-white me-3' to='/blog'>Blog</Link>
            </Nav>
        <Nav  >
            <p>
                {user?.photoURL?
                <Image
                src={user?.photoURL}>

                </Image>
                :
                <FaUserAlt></FaUserAlt>
            }
            </p>
            <p className='text-white me-3'>
                {
                    user?.displayName && <span>{user.displayName}</span>
                }
            </p>
            <Link className='text-decoration-none text-white me-3' to='/login'>Login</Link>
            <Link className='text-decoration-none text-white' to='/register'>Register</Link>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    );
};

export default Header;