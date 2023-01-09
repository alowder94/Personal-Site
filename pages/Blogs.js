import { React, useState, useEffect } from 'react'
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

  return (
    <Layout>
      {blogList.map((blog => <BlogSnipet blogSnipet={blog} />))}
    </Layout>
    )
}

export default Blogs