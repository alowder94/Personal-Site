import React from 'react'
import {Card, Button, Container, Row, Col } from 'react-bootstrap'

function BlogSnipet({blogSnipet, handleclick}) { //update prop name - we are passing a full blog not a snipet.
  return (
    <Card className="mb-2 bg-light" style={{textDecoration: "none", color: "black"}}>
        <Container>
            <Row className="align-items-center">
                <Col xs={3} className="text-center py-2">
                    <h5>{blogSnipet.title}</h5>
                </Col>
                <Col xs={8} className="pt-3 pb-2">
                    <p className="lead">{blogSnipet.snipet}</p>
                </Col>
                <Col >
                    <Button blog={blogSnipet._id} onClick={(e) => handleclick(e)} className="btn-secondary">Show</Button>
                </Col>
            </Row>
        </Container>
    </Card>
  )
}

export default BlogSnipet