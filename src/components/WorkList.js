import React from 'react'

export default function WorktList({data}) {
    console.log(data)
  return (
    <>
        {
            data.map((project, index) => {
                return (
                    <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{project.position}</h5>
                        <div className='' style={{display:"flex", justifyContent:"space-between"}}>
                            <span><a style={{textDecoration:"none", color:"black"}} href={project.company_url} target="_blank" >{project.company}</a></span>
                            <span>{project.timeline}</span>
                        </div>
                        <hr className=''></hr>
                        <div className='py-3'>
                            <ul>
                            { project.role.map(item => {
                                    return <li>{item}</li>
                            }) }
                            </ul>
                        </div>                  
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
