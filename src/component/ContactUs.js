/*import React from "react"
import { Container } from "react-bootstrap"
import { Header } from "./Header"
//import { Container, Row,Col,Form } from "react-bootstrap"
export function ContactUs() {
    return (
         <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh'}}>
            <Container>
                <Header title="Contact if any query" ></Header>
            </Container>
            </div>
        
    )
}*/

import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Header } from './Header';
import './costume-form.css';

export const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Simulate an asynchronous operation (e.g., an API call)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { message: 'Form submitted successfully!' } });
      }, 1000);
    })
    .then((response) => {
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Container className="custom-form-container">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter message"
                  name="message"
                  value={formData.message}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default ContactUs;
