import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import WorktList from "./WorkList";

import volunteer from "../assets/volunteer.json";
import teaching from "../assets/teaching.json";
import work from "../assets/work.json";

export default function Projects() {
  const [project, setProject] = useState("work");
  console.log(project);
  return (
    <Container id="projects" className="p-3 my-3">
      <h4>Work Experience</h4>
      <Nav className="justify-content-center" variant="tabs"  >
        <Nav.Item>
          <Nav.Link onClick={() => setProject("work")}>
            Industrial Experience
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
        {(project === "work") ?  <WorktList data={work} /> : 
        (project === "volunteer") ?  <WorktList data={volunteer} /> : 
          <WorktList data={teaching} />
        }
      </div>
    </Container>
  );
}
