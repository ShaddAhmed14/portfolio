import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {BsArrowUpRightSquare} from "react-icons/bs";
import { Button } from 'react-bootstrap'

export default function ProjectList({data, expand, setExpand}) {
  return (
    <>
        {
            data.map((project, index) => {
                return (
                    <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{project.name}</h5>
                        {expand ? <p class="card-text">
                        {project.description}
                        </p> : <></>}
                    </div>
                    <div class="card-footer" style={{display:"flex", justifyContent:"space-between", backgroundColor:"white", borderTop:"none" }}>
                        <span>
                        <Button variant='primary' onClick={() => setExpand(!expand)}>Description</Button> </span>
                        <span>
                        { project.github ?  <a href={project.github} class="card-link"><AiFillGithub size={25}/> </a> : <></>}
                        { project.url ?  <a href={project.url} class="card-link"><BsArrowUpRightSquare size={25}/></a> : <></>}
                        </span>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">{project.stack}</small>
                    </div>
                    </div>
                    </div>
                )
            })
        }
    </>
  )
}
