import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const CourseDetails = ({data}) => {
    const {title,picture,_id} =data;
    console.log(data)
    return (
        <div className='m-5 d-flex justify-content-center align-items-center'>
           <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseDetails;