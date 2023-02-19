import React from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="top">
      <div className="container-fluid">

      {/* <div className="collapse navbar-collapse px-5 mx-3" id="navbarSupportedContent"> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#container" smooth>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" smooth>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#languages" smooth>
                Languages and Frameworks
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="mx-3">
            <a href="https://github.com/ShaddAhmed14">
                <AiFillGithub color="white" size={25} className="mx-3" />
            </a>
            <a href="https://www.linkedin.com/in/sharjeelahmed14/">
                <AiFillLinkedin color="white" size={25}/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
