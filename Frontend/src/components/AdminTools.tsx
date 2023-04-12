import React from 'react'
import { useEffect, useState } from 'react'
import BlogTool from './BlogTool'
import { Blog } from '../types/Blog'

type AdminToolsProps = {
  entryType: string,
  id?: string,
}

export function AdminTools( props: AdminToolsProps ): JSX.Element {

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(
      () => { 
        if(props.id) {
          fetch(`http://localhost:3001/blogs/id/${props.id}`)
          .then(res => res.json())
          .then(data => setBlog(data))
          .catch(err => console.log(err))
        } else {
          setBlog(null)
        }
      }, [props.id])

  if(props.entryType == "blog"){    

    return (
      <BlogTool blog={blog}/>
    )

  } else {

    return (
      <>
        <p>This is the project portion of component</p>
      </>
    )

  }
    

  //TODO: Fix project section of this once generic BlogTool is functional - follow same component model
  // else if(props.entryType == "project") {
    
  //   if(props.updateOrCreate == "create") {
  //     return (
  //       <div>
  //         <AddProjectTool />
  //       </div>
  //     )
  //   } else if (props.updateOrCreate == "update") {
  //     return (
  //     <h1>Update Project Function: id = {props.id}</h1>
  //     )
  //   }
  // }

  //   return (
  //     <div>
  //       {props.updateOrCreate == 'update' &&
  //       <h1>Enter the {props.entryType}'s id</h1>
  //       }
  //       {props.updateOrCreate == 'create' &&
  //       <div>
  //         <h1>Error - you probably need to enter an ID to </h1>
  //         <h6>Entry Type = {props.entryType}</h6>
  //         <h6>Update Or Create = {props.updateOrCreate}</h6>
  //       </div>
  //       }
  //       </div>
  //   )

}