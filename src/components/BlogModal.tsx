import React from 'react'
import { Modal } from 'react-bootstrap'
import { Blog } from '../types/Blog'

type BlogModalProps = {
  blog:Blog
  showModal: boolean
  handleClose: () => void
}

function BlogModal(props: BlogModalProps) {
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header className={"bg-dark"} closeButton>
            <div style={{"width": "100%"}}>
                <Modal.Title className={"text-light text-center"}>{props.blog.title}</Modal.Title>
            </div>
        </Modal.Header>
        <Modal.Body className={"text-center"} style={{"height" : "300px", "overflowY": "scroll"}}>{props.blog.body}</Modal.Body>
    </Modal>
  )
}

export default BlogModal