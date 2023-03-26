import React from 'react'
import { ReactNode } from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import NavBar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

function Layout(props: LayoutProps) {
  return (
    <div className="bg-dark" style={{minHeight:"100vh", maxHeight:"100%"}}>
        <NavBar />
        <Container className="py-4 bg-secondary">
            {props.children}
        </Container>
        <Footer />
    </div>
    
  )
}

export default Layout