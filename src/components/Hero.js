import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container >
        <Row className='my-3 p-3'>
            <Col>
                <h2>Hello!</h2>
                <h2>My name is Sharjeel Ahmed Shaikh</h2>
                <h3>I am a Software Engineer</h3>
            </Col>
        </Row>
    </Container>  
    )
}
