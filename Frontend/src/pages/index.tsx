import React from 'react';
import { useState, useEffect } from 'react'
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import Layout from '../components/Layout';

function index() {
  
  const [aboutMe, setAboutMe] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3001/blogs/aboutme")
      .then(res => res.json())
      .then(data => setAboutMe(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={3} className="m-auto">
            <Image roundedCircle src="profilePicture.jpg"  className="d-block img-fluid mx-auto" />
          </Col>
        </Row>
        <h1 className="text-center display-3 mb-3">Austin Lowder - Software Engineer</h1>
        {/* TODO: Create new, professional facebook (keep separate from personal - maybe post some tech related things on this one to stay active in the community?) for this link, create twitter to link to here as well. Revise Linkdin and link here as well? - same with links in Navbar */}
        <p className="text-center lead mb-3"><a href="http://www.facebook.com" className="link-dark">Facebook</a> | <a href="https://github.com/alowder94" className="link-dark">Github</a></p>
        <Card className="text-center bg-light mb-3">
          <Card.Header className="display-5 py-3 bg-light">Welcome to my site</Card.Header>
          <Card.Subtitle className="display-6 pt-3">About Me</Card.Subtitle>
          <Card.Body className="lead px-3 pb-5">{aboutMe}</Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}

export default index