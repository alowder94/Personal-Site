import React from 'react'
import { Modal } from 'react-bootstrap'

function BlogModal({blog, showModal, handleClose}) {
  return (
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className={"bg-dark"} closeButton>
            <div style={{"width": "100%"}}>
                <Modal.Title className={"text-light text-center"}>{blog.title}</Modal.Title>
            </div>
        </Modal.Header>
        <Modal.Body className={"text-center"} style={{"height" : "300px", "overflow-y": "scroll"}}>{blog.body}</Modal.Body>
    </Modal>
  )
}

export default BlogModal