import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CourseDetails2 =({data}) => {
    const {title,picture,_id} =data;
    return (
        <div>
        <div>
        <Container>
     
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
       
       
      </Container>
        </div>
        </div>
       
    );
};

export default CourseDetails2;