import React from 'react'
import {Card, Link, Container, Row, Col } from 'react-bootstrap'

function BlogSnipet({blogSnipet}) { //update prop name - we are passing a full blog not a snipet.
  return (
    <Card as="a" href={`/blogs/${blogSnipet.id}`} className="mb-2 bg-light" style={{textDecoration: "none", color: "black"}}>
        <Container>
            <Row className="align-items-center">
                <Col xs={3} className="text-center py-2">
                    <h5>{blogSnipet.title}</h5>
                </Col>
                <Col xs={8} className="pt-3 pb-2">
                    <p className="lead">{blogSnipet.snipet}</p>
                </Col>
            </Row>
        </Container>
    </Card>
  )
}

export default BlogSnipet