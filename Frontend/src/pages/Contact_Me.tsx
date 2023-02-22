import { useEffect, useState, useMemo, FormEventHandler } from 'react'
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap'
import Layout from '../components/Layout'

function Contact_Me() {

  const [emailProviderActive, setEmailProviderActive] = useState<boolean>(true)

  function checkEmailProvider() {
    fetch("http://localhost:3001/contact-me/verify")
      .then(res => {
      if (res.status === 200) {
        setEmailProviderActive(true)
      } else {
        setEmailProviderActive(false)
      }
    })
    .catch(err => {
      setEmailProviderActive(false)
    })
}

  useEffect(() => checkEmailProvider() , [])


  async function submitForm (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    checkEmailProvider()
    
    if(emailProviderActive == false) {
      alert("Email Server is down at this time - please try again later!")
    }

    let firstName = document.getElementById("firstName") as HTMLInputElement;
    let lastName = document.getElementById("lastName") as HTMLInputElement;
    let subject = document.getElementById("subject") as HTMLInputElement;
    let body = document.getElementById("body") as HTMLInputElement;

    let bodyString = `From: ${firstName.value} ${lastName.value}
    
    ${body.value}`

    let email = {
      subject: `${subject.value}`,
      emailBody: bodyString
    }

    const response = await fetch("http://localhost:3001/contact-me", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })

    if(response.status == 200) {
      firstName.value = "";
      lastName.value = "";
      subject.value = "";
      body.value = "";

      alert("Email sent, I will get back to you as soon as possible - provided you included contact information in your email!")
    } else {
      alert("Email not sent - some kind of internal error has occoured. Please try again later");
    }
  }

  if(emailProviderActive) {
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
            <Form.Control as="textarea" rows={8} placeholder="Email Body - include contact information if you would like a follow-up" />
          </Form.Group>
          <Row>
            <Col className="text-end">
              <Button onClick={submitForm} variant="dark" className="me-2">Submit</Button>
            </Col>
          </Row>
        </Form>
        </Container>
      </Layout>
  )
    } else {
      return (
        <Layout>
          <h3 className="text-center">Email Server is down - please try again later!</h3>
        </Layout>
      )
    }
}

export default Contact_Me