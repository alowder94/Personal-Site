import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import NavBar from './Navbar'

function Layout({children}) {
  return (
    <div className="bg-dark" style={{minHeight:"100vh", maxHeight:"100%"}}>
        <NavBar />
        <Container className="py-4 bg-secondary">
            {children}
        </Container>
        <Footer />
    </div>
    
  )
}

export default Layout