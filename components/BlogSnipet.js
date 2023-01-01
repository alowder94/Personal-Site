import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

function BlogSnipet({blogSnipet}) {
  return (
    <Card className="mb-2">
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