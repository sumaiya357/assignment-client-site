
import React, { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Register = () => {
  const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext)
  const handleRegister =(event) =>{
    event.preventDefault();
    const form =event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
    form.reset()

  
   // ----- SignIn With Email Password ----
   createUser(email,password)
   .then(result => {
     const user = result.user
     console.log(user);
   })
 .catch(error => setError(error.message))
} 

    return (
        <div  className='myForm d-flex flex-column align-items-center mt-4  '>
    <Form onSubmit={handleRegister} className='w-50 border border-light  border-5 p-5 rounded shadow p-3 mb-5 bg-body rounded'>
        <h3>Register</h3>
         <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Enter Your name" required />

        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="photo" placeholder="Your photo URL" />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />

        <Form.Text className="text-muted">
         
        </Form.Text>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
    
    
      <Button className='mb-2 me-3' variant="primary" type="submit">
        Register
      </Button>
      <p className='text-danger'>{error}</p>
      <span>Already have a account? <Link className='text-decoration-none' to='/login'>Login</Link></span><br></br>
      
    
    </Form>
           
   
        </div>
    );
};

export default Register;