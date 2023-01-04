import React from 'react'
import { Accordion } from 'react-bootstrap'
import Layout from '../components/Layout'

function Projects() {
  //Create dummy project here to test component import and rendering here - should show 

  return (
    <Layout>
        <Accordion>
          {/*Something like projects.foreach(project => <Project props=project />)*/}
        </Accordion>
    </Layout>
  )
}

export default Projects