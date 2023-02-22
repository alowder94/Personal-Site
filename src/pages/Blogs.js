import { React, useState, useEffect } from 'react'
import BlogSnipet from '../components/BlogSnipet'
import BlogModal from '../components/BlogModal.tsx';
import Layout from '../components/Layout'

function Blogs() {
  const [blogList, setBlogList] = useState([]); 

  //Modal functionality
   const [showModal, toggleModal] = useState(false);
   const [selectedBlog, selectBlog] = useState("");

   //Grab all blogs and set state equal to returned blogs
  useEffect(() => {fetch("http://localhost:3001/blogs")
                    .then(res => res.json())
                    .then(data => setBlogList(data))
                    .catch((err) => console.log(err))},
                    [])
  
  const handleClose = () => toggleModal(false);

  //TODO: Resize the modal - apply some kind of styling to it
  async function blogClickListener(event) {
    event.preventDefault();
    if(showModal == false) {
      let id = event.target.getAttribute("value");

      //Fetch the specified blog here - update selected blog - this will hold the entire blog object
      let response = await fetch(`http://localhost:3001/blogs/${id}`)
        .then(res => res.json());
        selectBlog(JSON.parse(response));

      toggleModal(true);
    } else {
      alert("Error - corrupted state. Please refresh page")
      toggleModal(false);
    }
  }
  
  return (
    <Layout>
      {blogList.map(((blog) =><BlogSnipet handleClick={blogClickListener} blogSnipet={blog} key={blog._id}/>))}
      <BlogModal blog={selectedBlog} showModal={showModal} handleClose={handleClose} />
    </Layout>
    )
}

export default Blogs