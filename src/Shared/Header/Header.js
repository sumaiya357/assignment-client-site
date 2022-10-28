import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  './Header.css'
import { FaUserAlt } from "react-icons/fa";
import logo from '../../Asset/logo.png'
import { AuthContext } from '../../Context/AuthProvider';
import { Button, Image } from 'react-bootstrap';

  

const Header = () => {
  const [theme,setTheme] = useState(false)
    
  const handleTheme = () =>{
    setTheme(!theme)
  }
  const {user} = useContext(AuthContext);
  console.log('context',user)
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
             {
              theme?
              <Button onClick={handleTheme} variant='light'>Light</Button>
              :
              <Button className='border-white'  onClick={handleTheme} variant='dark'>Dark</Button>
             }
            
            
            </Nav>
        <Nav  >
            <p className='text-white'>
                {user?.photoURL?
                <Image
                src={user?.photoURL}
                width='30px'>

                </Image>
                :
                <FaUserAlt></FaUserAlt>
            }
            </p>
            <p className='ms-2 text-white me-3'>
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