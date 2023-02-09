import { React, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'

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
          {projects.map(project => <Project props={project} key={project.id}/>)}
    </Layout>
  )
}

export default Projects