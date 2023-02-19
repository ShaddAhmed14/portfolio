import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import dev from "../assets/dev.json";
import research from "../assets/research.json";
import volunteer from "../assets/volunteer.json";
import teaching from "../assets/teaching.json";
import course from "../assets/course.json";
import personal from "../assets/personal.json";
import ProjectList from "./ProjectList";

export default function Projects() {
  const [project, setProject] = useState("dev");
  const [expand, setExpand] = useState(false);
  console.log(project);
  return (
    <Container id="projects" className="p-3 my-3">
      <h4>Projects</h4>
      <Nav className="justify-content-center" variant="tabs"  >
        <Nav.Item>
          <Nav.Link onClick={() => setProject("dev")}>
            Development Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setProject("research")}>
            Research Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setProject("course")}>
            Course Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setProject("teaching")}>
            Teaching Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setProject("volunteer")}>
            Volunteer Experience
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div class="row row-cols-1 row-cols-md-3 g-4 py-3">
        {(project === "dev") ?  <ProjectList data={dev} expand={expand} setExpand={setExpand} /> : 
        (project === "teaching") ? <ProjectList data={teaching} expand={expand} setExpand={setExpand} /> :
        (project === "personal") ? <ProjectList data={personal} expand={expand} setExpand={setExpand} /> :
        (project === "research") ? <ProjectList data={research} expand={expand} setExpand={setExpand} /> :
        (project === "course") ? <ProjectList data={course} expand={expand} setExpand={setExpand} /> :
          <ProjectList data={volunteer} expand={expand} setExpand={setExpand} />
        }
      </div>
    </Container>
  );
}
