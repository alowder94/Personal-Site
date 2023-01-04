import React from 'react'
import { Accordion } from 'react-bootstrap'

function Project({props}) {
  return (
    //TODO: Run function here to retrun relevant blog posts depending on blog tags - store as a list in projectBlogs variable

    <Accordion.Item>
        <Accordion.Header>{props.projectName}</Accordion.Header>
        <Accordion.Body>{props.projectDescription}</Accordion.Body>
        <Accordion flush>
            <Accordion.Header>Related Blogs</Accordion.Header>
            <Accordion.Body className="text-center">
            {projectBlogs.foreach(blog => {/*Link component leading to relevant blog post here*/})}
            </Accordion.Body>
        </Accordion>
    </Accordion.Item>
    )
}

export default Project