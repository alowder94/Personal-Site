import React, { ReactElement } from 'react'
import { useState } from 'react'
import Layout from './Layout'
import { Button, Container, Form } from 'react-bootstrap'

function AddBlogTool() {
  
  const [blogTags, setBlogTags] = useState<string[]>([])

  function addBlogTag(newTag: string): void { //This may need to be reformatted as a clicklistener...but will need to retain this basic functionality
    let newBlogTags: string[] = blogTags;
    newBlogTags.push(newTag);
    setBlogTags(newBlogTags);
  }

  function submitForm(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    console.log("Form Submitted!");
  }

  return (
    <div>
        <h1 className='text-center display-5 mb-3'>Create a New Blog</h1>
        <Container className="border">
            <Form>
                <Form.Group className="m-2" controlId="blogTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" placeholder="Title"/>
                </Form.Group>
                <Form.Group className="m-2" controlId="blogSnipet">
                    <Form.Label>Snipet</Form.Label>
                    <Form.Control type="input" placeholder="Short description of the blog" />
              </Form.Group>
              <Form.Group className="m-2" controlId="blogBody">
                <Form.Label>Blog Body</Form.Label>
                <Form.Control type="text-area" placeholder="Blog Body" />
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

export default AddBlogTool