import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function BasicComponent()  {
  return (
    <Container>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
        
            <Col xs={6} md={6}>
              xs=4 md=4 :: Bootsttap Row Management
            </Col>
            <Col md={{  offset: 1,span: 5 }}>{`md={{ span: 2, offset: 1 }}`}</Col>
          </Row>
        </Container>
  )
}
