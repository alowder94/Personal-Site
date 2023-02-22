import { React, useEffect, useState } from 'react'
import Layout from '../src/components/Layout'
import Project from '../src/components/Project'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, [])



  return (
    <Layout>
          {projects.map(project => <Project props={project} key={project._id}/>)}
    </Layout>
  )
}

export default Projects