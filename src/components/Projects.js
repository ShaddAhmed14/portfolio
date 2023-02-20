import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import ProjectList from "./ProjectList";

import dev from "../assets/dev.json";
import research from "../assets/research.json";
import personal from "../assets/personal.json";

export default function Projects() {
  const [project, setProject] = useState("dev");
  const [expand, setExpand] = useState(false);
  console.log(project);
  return (
    <Container id="projects" className="p-3 my-3" style={{}}>
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
      </Nav>
      <div class="row row-cols-1 row-cols-md-3 g-4 py-3">
        {(project === "dev") ?  <ProjectList data={dev} expand={expand} setExpand={setExpand} /> : 
        <ProjectList data={research} expand={expand} setExpand={setExpand} /> 
        }
      </div>
    </Container>
  );
}
