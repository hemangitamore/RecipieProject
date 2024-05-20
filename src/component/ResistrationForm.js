/*import React, { useState } from 'react';
import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import { Header } from './Header';
import { saveDataOfUser } from './userService.js';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', address: ''});

  

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here
    console.log(formData);
    saveDataOfUser(formData)
    .then((response)=>{
     
      alert(response.data.message)
      setFormData({ name: '', phone: '', email: '', password: '', address: '' }); // Reset form fields
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  return (
    <Container>
      <Col lg={8}>
        <Header title="User Registration" description="" />
      </Col>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name}  onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone No" name="phone" value={formData.phone}  onChange={handleFieldChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email-Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Email-Id" name="email" value={formData.email}  onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" name="password" value={formData.password}  onChange={handleFieldChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" name="address" value={formData.address} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
            <Col lg={4}>
              <Button type="submit" variant="primary" onClick={handleSubmit}>Register User</Button>
            </Col>
          </Row>
        </Form>
      </Container>


    </Container>
  );
};

export default RegistrationForm;*/




import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { Header } from './Header';
import { saveDataOfUser } from './userService.js';
import './costume-form.css'
import '../App.css'

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', address: '' });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  }

  const validateField = (name, value) => {
    let errorMsg = '';

    switch (name) {
      case 'name':
        if (!value) errorMsg = 'Name is required.';
        break;
      case 'phone':
        const phoneRegex = /^[0-9]{10}$/;
        if (!value) errorMsg = 'Phone number is required.';
        else if (!phoneRegex.test(value)) errorMsg = 'Phone number is invalid.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) errorMsg = 'Email is required.';
        else if (!emailRegex.test(value)) errorMsg = 'Email is invalid.';
        break;
      case 'password':
        if (!value) errorMsg = 'Password is required.';
        else if (value.length < 6) errorMsg = 'Password must be at least 6 characters.';
        break;
      case 'address':
        if (!value) errorMsg = 'Address is required.';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field]) {
        validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    saveDataOfUser(formData)
      .then((response) => {
        alert(response.data.message);
        setFormData({ name: '', phone: '', email: '', password: '', address: '' }); // Reset form fields
        setShowSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 ">
      <h2 className="top-header text-white"> Resister for explore our other features</h2>
      <Container className="custom-form-container" >
        {showSuccess && <Alert variant="success">User registered successfully!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleFieldChange} />
                {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Phone No</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone No" name="phone" value={formData.phone} onChange={handleFieldChange} />
                {errors.phone && <Form.Text className="text-danger">{errors.phone}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Email-Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Email-Id" name="email" value={formData.email} onChange={handleFieldChange} />
                {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleFieldChange} />
                {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="text-black">Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" name="address" value={formData.address} onChange={handleFieldChange} />
                {errors.address && <Form.Text className="text-danger">{errors.address}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Button type="submit" variant="primary">Register User</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
   
  );
};

export default RegistrationForm;

