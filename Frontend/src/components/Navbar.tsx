import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" className="mx-0 px-0 py-2">
        {/* TODO: Use Facebook and Github logos here...create twitter and link them as well */}
        <Container className="ms-5 ps-5">
            <Navbar.Brand><a href="http://www.facebook.com" className="link-light">Facebook</a> | <a href="https://github.com/alowder94" className="link-light">Github</a></Navbar.Brand>
        </Container>
        <Container className="justify-content-end me-5 pe-5">
            <Nav className="">
                <Nav.Link href="/" className="link-light">Home</Nav.Link>
                <Nav.Link href="/Blogs" className="link-light">Blogs</Nav.Link>
                <Nav.Link href="/Projects" className="link-light">Projects</Nav.Link>
                <Nav.Link href="/Contact_Me" className="link-light">Contact Me</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar