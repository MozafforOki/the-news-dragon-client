import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Card className="text-center mx-auto" style={{ width: '800px' }}>
      <Card.Header>Terms and Condition</Card.Header>
      <Card.Body>
        <Card.Title>Terms and Condition</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellendus eum quis corrupti perspiciatis nemo. Possimus non error doloremque nihil reiciendis quia consequatur nesciunt
        </Card.Text>
        <p>Go back to <Link to="/register">Register</Link></p>
      </Card.Body>
    </Card>

    );
};

export default Terms;