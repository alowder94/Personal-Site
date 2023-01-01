import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Navbar.Brand>&copy; 2022</Navbar.Brand>
        {/* TODO: This link should take you to my contact-me page in order to control my emails */}
        <Navbar.Brand as="a" href="/Contact_Me">Contact Me</Navbar.Brand>
    </Navbar>
)
}

export default Footer