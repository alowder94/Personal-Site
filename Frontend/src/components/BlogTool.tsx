import React, { ReactElement } from 'react'
import { useState } from 'react'
import Layout from './Layout'
import { Button, Container, Form } from 'react-bootstrap'
import { Blog } from '../types/Blog'

type blogToolProps = {
    blog?: Blog | null
}

function BlogTool(props: blogToolProps) {

//Find way to manage blog tags -- this below might be a good start but maybe start architecture from scratch to optimize it for this new multi-function component
//   const [blogTags, setBlogTags] = useState<string[]>([])

//   function addBlogTag(newTag: string): void { //This may need to be reformatted as a clicklistener...but will need to retain this basic functionality
//     let newBlogTags: string[] = blogTags;
//     newBlogTags.push(newTag);
//     setBlogTags(newBlogTags);
//   }

  function submitForm(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    //Conditional - if blog is passed then build request and send to update backend - if no blog is passed send to create backend
    console.log("Form Submitted!");
    //Test this by pulling values from each field and outputting them in console
  }

  return (
    <div>
        <h1 className='text-center display-5 mb-3'>{props.blog? "Update Blog" : "Create a New Blog"}</h1>
        <Container className="border">
            <Form>
                <Form.Group className="m-2" controlId="blogTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" placeholder="Title" defaultValue={props.blog? props.blog.title : ""}/>
                </Form.Group>
                <Form.Group className="m-2" controlId="blogSnipet">
                    <Form.Label>Snipet</Form.Label>
                    <Form.Control type="input" placeholder="Short description of the blog" defaultValue={props.blog? props.blog.snipet : ""}/>
              </Form.Group>
              <Form.Group className="m-2" controlId="blogBody">
                <Form.Label>Blog Body</Form.Label>
                <Form.Control type="text-area" placeholder="Blog Body" defaultValue={props.blog? props.blog.body : ""}/>
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

export default BlogTool