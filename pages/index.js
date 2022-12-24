import React from 'react';
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function index() {
  return (
    <Container>
      {/* TODO: Center this image - should sit in the middle directly above my name */}
      <Row>
        <Col sm={3} className="m-auto">
          <Image roundedCircle src="profilePicture.jpg"  className="d-block img-fluid mx-auto" />
        </Col>
      </Row>
      <h1 className="text-center display-3 mb-3">Austin Lowder - Software Engineer</h1>
      <p className="text-center lead mb-3"><a href="http://www.facebook.com" className="link-dark">Facebook</a> | <a href="http://www.github.com" className="link-dark">Github</a></p>
      <Card className="text-center bg-light">
        <Card.Title className="display-5">Welcome to my site</Card.Title>
        <Card.Subtitle className="display-6">About Me</Card.Subtitle>
        <Card.Body className="lead">alskdfpa9;eojifdmlaijdnvuco;jwidmcn</Card.Body>
      </Card>
    </Container>
  )
}

export default index