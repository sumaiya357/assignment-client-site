import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h3>Blog</h3>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> what is cors?</Accordion.Header>
        <Accordion.Body>
        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header> Why are you using firebase?What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
        Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>  What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
        </div>
    );
};

export default Blog;