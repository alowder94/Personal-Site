import React, { MouseEvent } from 'react'
import { Form, Button } from 'react-bootstrap';

type tagsToolProps = {
    tags: string[],
    updateTags: Function 
}

function TagsTool(props: tagsToolProps) {

    function pushTags(event: MouseEvent) {
        const newTagField: HTMLInputElement = document.getElementById("newTag") as HTMLInputElement
        const newTag: string = newTagField.value
        if(props.tags && newTag != "") {
            console.log(newTag);
            const newTagsList: string[] = props.tags;
            newTagsList.push(newTag);
            console.log(newTagsList);
            props.updateTags(newTagsList);
        }
        newTagField.value = "";
    }

    return (
    <>
            <Form.Group className="m-2" controlId="newTag">
                <Form.Label>New Tag</Form.Label>
                <Form.Control type="input" placeholder="New Tag" />
            </Form.Group>
            <Button variant="dark" className="ms-2" onClick={pushTags}>Add Tag</Button>
    </>
  )
}

export default TagsTool