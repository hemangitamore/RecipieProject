import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Header } from './Header';
import './costume-form.css'

export const Login = () => {
  const [formData, setFormData] = useState({ name: '',password: ''});

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here
    console.log(formData);
  };

  return (

    <Container className="mt-20">
      <h2 className="text-white justify-content-center">Login here</h2>
     
      <Container  className="custom-form-container ">

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">User Name</Form.Label>
                <Form.Control type="text" placeholder="user Name" name="name" onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label  className="text-black">Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" name="password" onChange={handleFieldChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Button type="submit" variant="primary">Login</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      
      
    </Container>
  );
};

export default Login;