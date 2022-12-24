import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" className="mx-0 px-0 py-2">
        {/* TODO: Use Facebook and Github logos here...create twitter and link them as well */}
    <Container>
    <Navbar.Brand><a href="http://www.facebook.com" className="link-light">Facebook</a> | <a href="http://www.github.com" className="link-light">Github</a></Navbar.Brand>
    </Container>
    </Navbar>
    )
}

export default NavBar