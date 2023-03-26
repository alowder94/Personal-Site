import React from 'react'
import { useState } from 'react'
import Layout from './Layout'
import { Button, Container, Form } from 'react-bootstrap'

function AddProjectTool() {
  
  const [ProjectTags, setProjectTags] = useState<string[]>([])

  function AddProjectTag(newTag: string): void { //This may need to be reformatted as a clicklistener...but will need to retain this basic functionality
    let newProjectTags: string[] = ProjectTags;
    newProjectTags.push(newTag);
    setProjectTags(newProjectTags);
  }

  function submitForm(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    console.log("Form Submitted!")
  }

  return (
    <div>
        <h1 className='text-center display-5 mb-3'>Create a New Project</h1>
        <Container className="border">
            <Form>
                <Form.Group className="m-2" controlId="projectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="input" placeholder="Title"/>
                </Form.Group>
                <Form.Group className="m-2" controlId="projectDescription">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control type="input" placeholder="Short description of the project" />
              </Form.Group>
              {/* Implement feature for adding tags one at a time */}
              <div className="text-center">
                  <Button onClick={submitForm} variant="dark" className='my-2'>Submit</Button>
              </div>
            </Form>
        </Container>
    </div>
    )
}

export default AddProjectTool