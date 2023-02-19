import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

export default function AboutMe() {
  return (
    <Container
      id="container"
      className="p-3 my-3 w-100"
      style={{ backgroundColor: "black", color: "white", width: "100%" }}
    >
      <h3 className="px-3">Sharjeel Ahmed Shaikh</h3>
      <h6 className="px-3">Software Engineer</h6>
      <Row md={2} sm={1}>
        <Col md={8}>
          <div className="p-3">
          <p>{about1}</p>
          <p>{about2}</p>
            <h6>Contact Me</h6>
            <a href="mailto:sharjeelshaikh509@gmail.com" style={{color:"white", textDecoration:"none" }}><p>Email : sharjeelshaikh509@gmail.com</p></a>
            <a href="tel:+923072463420" style={{color:"white", textDecoration:"none" }}><p>Number: +923072463420</p></a>
          </div>
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* marginLeft: "auto", marginRight: "auto" */}
          <img src={img} style={{ width: "90%" }} />
        </Col>
      </Row>
      <Button className="m-3" href={resume} target="_blank">
        View Resume
      </Button>
    </Container>
  );
}

const about1 =
  "I am a Bachelor of Science in Computer Science student at Lahore University of Management Sciences in Pakistan. I am passionate about developing innovative products at the intersection of Software Engineering and Machine Learning. Throughout my studies, I have gained practical experience with a variety of programming languages and technologies."
const about2 = "I am currently working on two exciting products: an Early Forest Fire Detection System and a Visual AI System. Both projects demonstrate my in-depth knowledge of the domain as well as my ability to think creatively about solving real-world problems. It also demonstrates my eagerness to learn about cutting-edge technology. I am eager to continue exploring new and exciting projects that push the boundaries of what is possible with technology.";
