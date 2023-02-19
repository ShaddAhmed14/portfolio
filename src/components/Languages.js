import React from 'react'
// https://seeklogo.com/vector-logo/272750/node-js
import { Row, Col, Container } from 'react-bootstrap'
import react from '../logos/react.png'
import node from '../logos/nodejs.png'
import css from '../logos/css.png'
import html from '../logos/html.png'
import django from '../logos/django.png'
import c from "../logos/c++.png"
import flutter from "../logos/flutter.png"
import js from "../logos/js.png"
import python from "../logos/python.png"
import bootstrap from "../logos/bootstrap.png"
import figma from "../logos/figma.png"
import postman from "../logos/postman.png"
import wordpress from "../logos/wordpress.png"
import mongodb from "../logos/mongodb.png"
import mysql from "../logos/mysql.png"

export default function Languages() {
  var width = "50px"
  var height = "50px"
  return (
    <Container id="languages" className="p-3 my-3" style={{backgroundColor:"black", color:"white" }}>
      <h5>Languages and Frameworks</h5>
      <p>Frontend</p><hr style={{color:"white"}}/>
      <Row md={5} sm={1} className="p-2" >
      <Col className="py-2"><img src={react} title="React" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={html} title="HTML" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={css} title="CSS" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={flutter} title="FLutter" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={bootstrap} title="Bootstrap 5" style={{width:width, height:height }} /></Col>
      </Row>
      <p>Backend</p><hr style={{color:"white"}}/>
      <Row md={5} sm={1} className="p-2" >
      <Col className="py-2"><img src={node} title="NodeJs" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={django} title="Django" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={mongodb} title="MongoDB" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={mysql} title="MySQL" style={{width:width, height:height }} /></Col>
      </Row>
      <p>Programming Languages</p><hr style={{color:"white"}}/>
      <Row md={5} sm={1} className="p-2" >
      <Col className="py-2"><img src={c} title="C++" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={js} title="Javascript" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={python} title="Python" style={{width:width, height:height }} /></Col>
      </Row>
      <p>Tools</p><hr style={{color:"white"}}/>
      <Row md={5} sm={1} className="p-2" >
      <Col className="py-2"><img src={wordpress} title="Wordpress" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={figma} title="Figma" style={{width:width, height:height }} /></Col>
      <Col className="py-2"><img src={postman} title="Postman" style={{width:width, height:height }} /></Col>
      </Row>
    </Container>
  )
}

