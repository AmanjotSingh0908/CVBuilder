import React from 'react'
import '../../resources/templates.css'

function Template1() {
    const user = JSON.parse(localStorage.getItem('resumebuilder-user'))
  return (
    <div className='template1parent'>
        <div className='top d-flex justify-content-between'>
            <h1 className='start'>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
            <div>
                <p className='field'>{user.email}</p>
                <p className='field'>{user.address}</p>
                <p className='field'>{user.mobileNumber}</p>
            </div>
        </div>

        <div className='divider mt-3'></div>

        <div className='objective mt-3'>
            <h3 className='objectiveh3'>Summary</h3>
            <hr />
            <p>{user.carrierObjective}</p>
        </div>

        <div className='divider mt-3'></div>

        <div className='education mt-3'>
            <h3 className='educationh3'>Education</h3>
            <hr />
          {user.education.map((education)=>{
            return <div className='d-flex align-items-center'>
                <h6 className="educationh6" style={{width:100}}><b>{education.range} : </b></h6>
                <p className='field'><b>{education.qualification} </b>with <b>{education.percentage}%</b> in {education.institution}</p>
            </div>
            })}
        </div>

        <div className='divider mt-3'></div>

        <div className='experience mt-3'>
            <h3 className='educationh3'>Experience</h3>
            <hr />
          {user.experience.map((exp)=>{
            return <div className='d-flex align-items-center'>
                <h6 className="educationh6" style={{width:100}}><b>{exp.range} : </b></h6>
                <p className='field'><b>{exp.company} </b> in <b>{exp.place}</b></p>
            </div>
            })}
        </div>

        <div className='divider mt-3'></div>

        <div className='projects mt-3'>
            <h3 className='educationh3'>Projects</h3>
            <hr />
          {user.projects.map((project)=>{
            return <div className='d-flex flex-column'>
                <h6 className="educationh6" style={{fontSize:'18px'}}><b>{project.title} : </b></h6>
                <p className='field'>{project.description}</p>
            </div>
            })}
        </div>

        <div className='divider mt-3'></div>

        <div className='skills mt-3'>
            <h3 className='educationh3'>Skills</h3>
            <hr />
        {user.skills.map((skill)=>{
            return <div className='d-flex flex-column'>
                <p>{skill.technology}</p>
            </div>
            })}
        </div>
    </div>
  )
}

export default Template1