import React from 'react'
import {Card, Button, Container, Row, Col } from 'react-bootstrap'
import { BlogSnipet } from '../types/BlogSnipet'

type BlogSnipetProps = {
    blogSnipet: BlogSnipet
    handleClick: Function
}

function BlogSnipet(props: BlogSnipetProps) { //update prop name - we are passing a full blog not a snipet.
  return (
    <Card className="mb-2 bg-light" style={{textDecoration: "none", color: "black"}}>
        <Container>
            <Row className="align-items-center">
                <Col xs={3} className="text-center py-2">
                    <h5>{props.blogSnipet.title}</h5>
                </Col>
                <Col xs={8} className="pt-3 pb-2">
                    <p className="lead">{props.blogSnipet.snipet}</p>
                </Col>
                <Col >
                    <Button value={props.blogSnipet._id} onClick={(e) => props.handleClick(e)} className="btn-secondary">Show</Button>
                </Col>
            </Row>
        </Container>
    </Card>
  )
}

export default BlogSnipet