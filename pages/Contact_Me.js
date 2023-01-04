import React from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import Layout from '../components/Layout'

function Contact_Me() {
  return (
    <Layout>
      <h1 className="text-center display-5 mb-3">Contact Me</h1>
      <Container className="p-5 border">
      <Form>
        <Row>
          <Col xs={4}>
            <Form.Group className="m-2" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="input" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group className="m-2" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="input" placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="m-2" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="input" placeholder="Subject" />
        </Form.Group>
        <Form.Group className="m-2" controlId="body">
          <Form.Label>Email Body</Form.Label>
          <Form.Control as="textarea" rows={8} placeholder="Email Body" />
        </Form.Group>
        <Row>
          <Col className="text-end">
            <Button type="submit" variant="dark" className="me-2">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Layout>
  )
}

export default Contact_Me