import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PremiumDetails from '../PremiumDetails/PremiumDetails';

const RightNavDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <div className='m-5 d-flex justify-content-center align-items-center'>
               
           <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={details.picture} />
      <Card.Body>
        <Card.Title>{details.title}</Card.Title>
        <Card.Text>
         Course
        </Card.Text>
        <Button  variant="primary"><Link to='/premium' className='text-white text-decoration-none'>Get Premium Access</Link></Button>
      </Card.Body>
    </Card>
     
        </div>
        </div>
    );
};

export default RightNavDetails;