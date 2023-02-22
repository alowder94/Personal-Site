import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import { ProjectType } from '../types/ProjectType'


function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, [])



  return (
    <Layout>
          {projects.map(project => <Project project={project} key={project._id}/>)}
    </Layout>
  )
}

export default Projects