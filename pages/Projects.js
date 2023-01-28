import React from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'

function Projects() {
  //TODO: Create dummy project here to test component import and rendering here - should show accordion section for project, name and description within, then an internal accordion with relevant blog links - all rendered from  Project component
  const project = {projectName: "Project1", projectDescription: "blah blah blah blah blah description blah blah blah"}
  const project2 = {projectName: "Project2", projectDescription: "blah blah blah blah blah description blah blah blah"}
  const project3 = {projectName: "Project3", projectDescription: "blah blah blah blah blah description blah blah blah"}
  const project4 = {projectName: "Project4", projectDescription: "blah blah blah blah blah description blah blah blah"}
  const projects = [project, project, project, project]

  return (
    <Layout>
          {projects.map(project => <Project props={project} />)}
    </Layout>
  )
}

export default Projects