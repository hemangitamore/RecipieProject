import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

export const UserCards = () => {
  const [recipies, setrecipies] = useState([]);

  useEffect(() => {
    axios.get('/recipies')
      .then(response => {
        setrecipies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {recipies.map(recipies => (
          <Col lg={4} key={recipies.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{recipies.name}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {recipies.type}<br />
                  <strong>UserName</strong> {recipies.userName}<br />
                 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;
