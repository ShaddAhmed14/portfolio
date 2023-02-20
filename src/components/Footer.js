import React from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="container" style={{backgroundColor:"black", color:"white"}}>
      <footer className="py-3 my-4">
        <div className="nav justify-content-center pb-3 mb-3" ><a href="#top"><AiOutlineArrowUp size={25} /></a></div>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a target={"_blank"} href="https://github.com/ShaddAhmed14">
                <AiFillGithub color="white" size={25} className="mx-3" />
            </a>
          </li>
          <li>
            <a target={"_blank"} href="https://www.linkedin.com/in/sharjeelahmed14/">
                <AiFillLinkedin color="white" size={25} className="mx-3"/>
            </a>
          </li>
          <li>
            <a target={"_blank"} href="https://twitter.com/">
                <AiFillTwitterCircle color="white" size={25} className="mx-3"/>
            </a>
          </li>
        </ul>
        <p class="text-center" style={{color:"white"}}>© 2023 Sharjeel Ahmed Shaikh</p>
      </footer>
    </div>
  )
}
