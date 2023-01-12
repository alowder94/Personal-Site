import { React, useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import BlogSnipet from '../components/BlogSnipet'
import Layout from '../components/Layout'

function Blogs() {
  const [blogList, setBlogList] = useState([]); 
  //Grab all blogs and set state equal to returned blogs
  useEffect(() => {fetch("http://localhost:3001/blogs")  
                    .then(res => res.json())
                    .then(data => setBlogList(data))
                    .catch((err) => console.log(err))},
                    [])

  //Modal functionality
   const [showModal, toggleModal] = useState(false);
   const [selectedBlog, selectBlog] = useState("");
  
  const handleClose = () => toggleModal(false);

  //TODO: Resize the modal - apply some kind of styling to it
  async function blogClickListener(event) {
    event.preventDefault();
    if(showModal == false) {
      let id = event.target.getAttribute("blog");
      console.log(id);
      //Fetch the specified blog here - update selected blog - this will hold the entire blog object
      let response = await fetch(`http://localhost:3001/blogs/${id}`)
        .then(res => res.json());
        selectBlog(JSON.parse(response));
      toggleModal(true);
    } else {
      console.log("Setting toggleModal to false");
      toggleModal(false);
    }
  }
  
  return (
    <Layout>
      {blogList.map(((blog) =><BlogSnipet handleclick={blogClickListener} blogSnipet={blog} key={blog.id}/>))}

      <Modal show={showModal} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedBlog.body}</Modal.Body>
      </Modal>
    </Layout>
    )
}

export default Blogs