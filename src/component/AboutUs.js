import React from "react"
import { Alert, Container,Card,Row,Col,Button } from "react-bootstrap"
import '../App.css'
//import Carousel from 'react-bootstrap/Carousel';
//import corosel from "./corosel";


//import { Header } from "./Header"

export function AboutUs() {
    return (
        <div className="background ">
        <Container style={{textAlign:'center'}} >
        <Alert variant="success"><h1>Know about us</h1></Alert>
           
            <div className="text-white">
            <h2>Meet My team Members</h2>
            <span>Teamwork is the ability to work together toward a common vision.</span>
                <span>The ability to direct individual accomplishments toward organizational objectives. </span>
                    <span>It is the fuel that allows common people to attain uncommon results. - Andrew Carnegie</span>
                    </div>
            <Row className="justify-content-center mt-5">
                <Col lg={3} className="mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/Hemangi.jpg')}/>
                        <Card.Body>
                            <Card.Title>Hemangi Tamore</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} className="mb-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/Abhishek.jpg')} />
                        <Card.Body>
                            <Card.Title>Abhishek Hande</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} className="mb-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Hares Shaikh</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                          
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
};


export default AboutUs;
