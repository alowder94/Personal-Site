import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Blog } from '../types/Blog'
import Tags from './Tags'

type blogToolProps = {
    blog?: Blog | null
}

function BlogTool(props: blogToolProps) {

  const [blogTags, setBlogTags] = useState<string[]>([])
  

function createBlog(blogTitle: string, blogSnipet: string, blogBody: string, blogTags: string[]): void {
  const requestBody = {
    "blogTitle": blogTitle,
    "blogSnipet": blogSnipet,
    "blogBody": blogBody,
    "blogTags": blogTags
  }

  const headers = {
    "Content-Type": "application/json"
  }

  fetch("http://localhost:3001/blogs",
          {method: "POST",
          mode: "cors",
          body: JSON.stringify(requestBody),
          headers: new Headers(headers)
          })
          .then(res => console.log(res.json))
          .catch(err => console.log(err))
}  

function updateBlog(id: string, blogTitle: string, blogSnipet: string, blogBody: string, blogTags: string[]): void {
  console.log(`Blog Updated. id: ${id} | title: ${blogTitle} | snipet: ${blogSnipet} | body: ${blogBody}`)
}

function submitForm(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    
    let blogTitle: HTMLInputElement = document.getElementById("blogTitle") as HTMLInputElement;
    let blogSnipet: HTMLInputElement = document.getElementById("blogSnipet") as HTMLInputElement;
    let blogBody: HTMLInputElement = document.getElementById("blogBody") as HTMLInputElement;

    if(props.blog) {
      let id: string = props.blog.id;
      updateBlog(id, blogTitle.value, blogSnipet.value, blogBody.value, ["test tags"]); //TODO: Grab tags from tag management component once it is functional
    } else {
      createBlog(blogTitle.value, blogSnipet.value, blogBody.value, ["test tags"]); //TODO: Grab tags from the tag management component once it is functional
    }
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
              <Tags tags={props.blog? props.blog.tags : []} updateTags={setBlogTags} />
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