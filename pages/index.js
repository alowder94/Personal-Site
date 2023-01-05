import React from 'react';
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import Layout from '../components/Layout';

function index() {

  //TODO: Eventually this will go into a db and be fetched using some api - either internal to this project or in the backend that will eventually be created for this project
  const aboutMe = "I am a Full Stack developer from Illinois. My development skills/experience are somewhat all over the place - from several Javascript/Typescript frameworks, Java applications (mainly using Springboot for REST APIs), Python, C++, Terraform, both relational and non-relational data management, and cloud platforms including AWS and Azure. This list is ever-expanding, as I am constantly picking up side projects, and typically choose a tech stack that I have little to no experience with to complete these projects. I pride myself in being able to pump out quality work in a timely manner, and being able to pick up and leverage new technologies and skills quickly and efficiently. My current professional work is primarily focused on backend, cloud hosted software solutions, and my side projects right now are mainly working with front end server side rendered interfaces - such as this. The technology world is constantly changing, therefore so are my areas of focus. As Wayne Gretzky said - \"Skate to where the puck is going to be, not where it has been!\"" 
  
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