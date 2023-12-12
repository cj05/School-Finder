import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardO() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardO;