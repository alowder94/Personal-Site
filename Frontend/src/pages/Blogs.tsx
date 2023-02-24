import { useState, useEffect, ReactComponentElement } from 'react'
import BlogSnipet from '../components/BlogSnipet'
import BlogModal from '../components/BlogModal';
import Layout from '../components/Layout'
import { Blog } from '../types/Blog';

function Blogs() {
  const [blogList, setBlogList] = useState<Blog[]>([]); 

  //Modal functionality
   const [showModal, toggleModal] = useState<boolean>(false);
   const [selectedBlog, selectBlog] = useState<Blog>({} as Blog);

   //Grab all blogs and set state equal to returned blogs
  useEffect(() => {fetch("http://localhost:3001/blogs")
                    .then(res => res.json())
                    .then(data => setBlogList(data))
                    .catch((err) => console.log(err))},
                    [])
  
  const handleClose = () => toggleModal(false);

  //TODO: Resize the modal - apply some kind of styling to it
  async function blogClickListener(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if(showModal == false) {
      const target = event.target as HTMLButtonElement
      let id = target.getAttribute("value");

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