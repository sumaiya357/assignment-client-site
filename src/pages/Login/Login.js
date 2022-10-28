import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
  const [error, setError] = useState('')
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const {signIn,signInWithGit,providerLogin} = useContext(AuthContext)
   const navigate = useNavigate();
  const handleGoogle =() =>{
    providerLogin(googleProvider)
  }
  const handleGitHub =() =>{
    signInWithGit(gitProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))

    
  }

  

  const handleSubmit =(event) =>{
    event.preventDefault();
  
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    

    signIn(email,password)
    .then(result => {
        const user = result.user
        console.log(user)   
        form.reset();
        setError('');
        
        navigate('/')
        // navigate(from,{replace:true});
    })
    .catch(error=>{
     setError(error.message)})

}
  
    return (
        <div className='myForm d-flex flex-column align-items-center mt-4  '>
             <Form onSubmit={handleSubmit} className='w-50 border border-light  border-5 p-5 rounded shadow p-3 mb-5 bg-body rounded ' >
              <h3>Login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p className='text-danger'>{error}</p>
      <p>New to this site? <Link className='text-decoration-none' to='/register'>Register Here</Link></p>
      
  
      <Button onClick={handleGoogle} variant="outline-success" className='mb-2'>Signin With Google</Button><br></br>
      <Button onClick={handleGitHub} variant="outline-primary">Signin With GitHub</Button>
    
    
    </Form>
            
        </div>
    );
};

export default Login;