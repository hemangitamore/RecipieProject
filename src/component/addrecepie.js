import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Header } from './Header';
import {  saveRecepie } from './recipeAddService.js';
import './costume-form.css'
export const AddRecepie = () => {
  const [formData, setFormData] = useState({ id:'',name: '',type: '',userName:'' });

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here
    console.log(formData);
    saveRecepie(formData)
    .then((response)=>{
     
      alert(response.data.message)
      setFormData({ id: '', name: '', type: '',userName: '' }); // Reset form fields
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 ">
      
      <Container className="custom-form-container">
        <Form onSubmit={handleSubmit}>
          <Row>
          <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Id</Form.Label>
                <Form.Control type="number" placeholder="id" name="id" value={formData.id} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Recepie Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Recepie Name" name="name" value={formData.name} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Type" name="type" value={formData.type} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" name="userName" value={formData.userName} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            </Row>
          
          
          <Row>
            <Col lg={12}>
              <Button type="submit" variant="primary" onClick={handleSubmit}>Upload</Button>
            </Col>
          </Row>

         
        </Form>
      </Container>
      
    </Container>

  );
};

export default AddRecepie;