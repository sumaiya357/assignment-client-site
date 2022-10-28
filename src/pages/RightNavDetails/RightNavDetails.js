import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const RightNavDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <div className='m-5 d-flex justify-content-center align-items-center'>
           <Card style={{ width: '22rem' }}>
      {/* <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title> */}
        <Card.Text>
         Course
        </Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      {/* </Card.Body> */}
    </Card>
        </div>
        
        </div>
    );
};

export default RightNavDetails;