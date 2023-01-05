import React from 'react'
import { Accordion } from 'react-bootstrap'
import BlogSnipet from './BlogSnipet'

function Project({props}) {

    const blog1 = {title: "Blog1", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog2 = {title: "Blog2", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog3 = {title: "Blog3", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog4 = {title: "Blog4", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog5 = {title: "Blog5", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog6 = {title: "Blog6", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog7 = {title: "Blog7", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog8 = {title: "Blog8", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    const blog9 = {title: "Blog9", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
    
    const projectBlogs = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9] //TODO: Run function here to retrun relevant blog posts depending on blog tags - store as a list in projectBlogs variable

    return (
    <Accordion.Item eventKey={props.projectName}>
        <Accordion.Header><p className='lead fw-bold m-0 p-1 '>{props.projectName}</p></Accordion.Header>
        <Accordion.Body className="p-0">
            <p className="lead p-2 text-center">{props.projectDescription}</p>
            <Accordion flush>
                <Accordion.Header className="p-3">Related Blogs</Accordion.Header>
                <Accordion.Body className="text-center">
                {projectBlogs.map(blog => <BlogSnipet blogSnipet={blog} />)}
                </Accordion.Body>
            </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    )
}

export default Project