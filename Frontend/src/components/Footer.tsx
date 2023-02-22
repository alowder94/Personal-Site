import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Navbar.Brand>&copy; 2022</Navbar.Brand>
        <Navbar.Brand as="a" href="/Contact_Me">Contact Me</Navbar.Brand>
    </Navbar>
)
}

export default Footer