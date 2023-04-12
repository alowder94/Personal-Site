import React from 'react'
import { useState, useEffect } from 'react'

type tagsProps = {
    tags: string[],
    updateTags: Function //This will need to be some kind of changeHandler...I think I've done this elsewhere in this project already
}

function Tags(props: tagsProps) {

    function pushTags(newTag: string) {
        if(props.tags) {
        const newTagsList: string[] = props.tags;
        newTagsList.push(newTag);
        props.updateTags(newTagsList);
        }
    }

    return (
    <>
        <h1>This is the tags component</h1>
        {props.tags.length > 0? props.tags.map(tag => <p>{tag}</p>) : <p>No tags found</p>}
    </>
  )
}

export default Tags