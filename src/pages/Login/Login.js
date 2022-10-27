import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {


  const handleSubmit =() => {
     
  }
    return (
        <div className='myForm d-flex flex-column align-items-center mt-4  '>
             <Form onSubmit={handleSubmit} className='w-50 border border-light  border-5 p-5 rounded shadow p-3 mb-5 bg-body rounded ' >
              <h3>Login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>New to this site? <Link className='text-decoration-none' to='/register'>Register Here</Link></p>
      
     
  
    
    
    </Form>
            
        </div>
    );
};

export default Login;