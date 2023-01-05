import React from 'react'
import BlogSnipet from '../components/BlogSnipet'
import Layout from '../components/Layout'

function Blogs() {

  const blog1 = {id: "1", title: "Blog1", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog2 = {id: "2", title: "Blog2", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog3 = {id: "3", title: "Blog3", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog4 = {id: "4", title: "Blog4", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog5 = {id: "5", title: "Blog5", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog6 = {id: "6", title: "Blog6", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog7 = {id: "7", title: "Blog7", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog8 = {id: "8", title: "Blog8", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
  const blog9 = {id: "9", title: "Blog9", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}


  const blogList = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9]

  return (
    <Layout>
      {blogList.map((blog => <BlogSnipet blogSnipet={blog} />))}
    </Layout>
    )
}

export default Blogs