import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap';
import { ChangeEvent, ChangeEventHandler } from 'react';

import { AdminTools } from './AdminTools';

function AdminToolsFacade() {

    const [entryType, setEntryType] = useState<string>("blog");
    const [updateOrCreate, setUpdateOrCreate] = useState<string>("create");
    const [id, setId] = useState<string | null>(null);

    const updateEntryType: ChangeEventHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        let newEntryType: string = event.target.value;
        setId(null)
        setEntryType(newEntryType);
    }

    const updateAddOrUpdate: ChangeEventHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        let newAddOrUpdateSelection: string = event.target.value;
        setId(null)
        setUpdateOrCreate(newAddOrUpdateSelection);
    }

    const updateId: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newId = event.target.value;
        setId(newId);
    }

    return (
        <div>
            <Form.Select aria-label="entryType" onChange={(event: ChangeEvent<HTMLSelectElement>) => updateEntryType(event)} >
                <option value="blog">Blog</option>
                <option value="project">Project</option>
            </Form.Select>
            <Form.Select aria-label="addOrUpdate" onChange={(event: ChangeEvent<HTMLSelectElement>) => updateAddOrUpdate(event)} className="my-3">
                <option value="create">Create</option>
                <option value="update">Update</option>
            </Form.Select>
            {updateOrCreate === 'update' ?
            <Form.Group controlId="projectName">
                <Form.Control type="input" placeholder="Project or Blog ID" onChange={updateId}/>
            </Form.Group>
            : null
            }
            
            <AdminTools entryType={entryType} id={id as string}/>
        </div>
  )
}

export default AdminToolsFacade