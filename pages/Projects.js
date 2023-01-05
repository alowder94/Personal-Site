import React from 'react'
import { Accordion } from 'react-bootstrap'
import Layout from '../components/Layout'
import Project from '../components/Project'

function Projects() {
  //TODO: Create dummy project here to test component import and rendering here - should show accordion section for project, name and description within, then an internal accordion with relevant blog links - all rendered from  Project component
  const project = {projectName: "Project1", projectDescription: "blah blah blah blah blah description blah blah blah"}
  const projects = [project]

  return (
    <Layout>
        <Accordion>
          {projects.map(project => <Project props={project} />)}
        </Accordion>
    </Layout>
  )
}

export default Projects