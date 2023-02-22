import { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import BlogSnipet from './BlogSnipet'
import BlogModal from './BlogModal'
import { Blog } from '../types/Blog'
import { ProjectType } from '../types/ProjectType'

type ProjectProps = {
  project: ProjectType
}


function Project(props: ProjectProps) {

    const [projectBlogs, setProjectBlogs] = useState<Blog[]>([])

    //Modal functionality
   const [showModal, toggleModal] = useState(false);
   const [selectedBlog, selectBlog] = useState<Blog>({} as Blog);

    useEffect(() => {
        fetch(`http://localhost:3001/blogs/tags?tags=${props.project.tags}`)
        .then(res => res.json())
        .then(data => setProjectBlogs(data))
    }, [])

    const handleClose = () => toggleModal(false);

    //TODO: Resize the modal - apply some kind of styling to it
    async function blogClickListener(event: any) { //TODO: What kind of element is this attached to? Why is the handler failing when using React.MouseEvent as type?
      event.preventDefault();
      if(showModal == false) {
        let id = event.target.getAttribute("blog");
  
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
    <Accordion key={props.project._id}>
        <Accordion.Item eventKey={props.project.name}>
            <Accordion.Header><p className='lead fw-bold m-0 p-1 '>{props.project.name}</p></Accordion.Header>
            <Accordion.Body className="p-0">
                <p className="lead p-2 text-center">{props.project.projectDescription}</p>
                <Accordion flush>
                    <Accordion.Header className="p-3">Related Blogs</Accordion.Header>
                    <Accordion.Body className="text-center">
                    {projectBlogs.map(blog => <BlogSnipet blogSnipet={blog} handleClick={blogClickListener} key={blog._id} />)}
                    <BlogModal blog={selectedBlog} showModal={showModal} handleClose={handleClose} />
                    </Accordion.Body>
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    )
}

export default Project