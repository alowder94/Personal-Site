import React from 'react'
import AddBlogTool from './AddBlogTool'
import AddProjectTool from './AddProjectTool'
import UpdateBlogTool from './UpdateBlogTool'

type AdminToolsProps = {
  entryType: string,
  updateOrCreate: string,
  id?: string,
}

export function AdminTools( props: AdminToolsProps ): JSX.Element {

  if(props.entryType == "blog"){    
    
    if(props.updateOrCreate == "create"){
      return (
        <div>
          <AddBlogTool />
        </div>
      )
    } else if (props.updateOrCreate == "update" && props.id) {
      return (
      <UpdateBlogTool id={props.id} />
      )
    }

  }
    
  
  else if(props.entryType == "project") {
    
    if(props.updateOrCreate == "create") {
      return (
        <div>
          <AddProjectTool />
        </div>
      )
    } else if (props.updateOrCreate == "update") {
      return (
      <h1>Update Project Function: id = {props.id}</h1>
      )
    }
  }

    return (
      <div>
        {props.updateOrCreate == 'update' &&
        <h1>Enter the {props.entryType}'s id</h1>
        }
        {props.updateOrCreate == 'create' &&
        <div>
          <h1>Error - you probably need to enter an ID to </h1>
          <h6>Entry Type = {props.entryType}</h6>
          <h6>Update Or Create = {props.updateOrCreate}</h6>
        </div>
        }
        </div>
    )

}