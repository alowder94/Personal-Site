import {Request, Response} from 'express'
import mongoose from 'mongoose'
import { config } from '../../config.js'

import {Project} from "../Model/project.js"



console.log(config.DBUSERNAME + " | " + config.DBPASSWORD)

const DBURI = `mongodb+srv://${config.DBUSERNAME}:${config.DBPASSWORD}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DBURI)
    .catch(err => console.log(err))


//Returns all projects
export function getAllProjects(req: Request, res: Response) {
    Project.find()
        .then(results => {
            res.status(200).end(JSON.stringify(results))
        })
        .catch(err => console.log(err))
}

export function getProjectById(req: Request, res: Response) {
    const id = req.params.id
    Project.findById(id)
        .then(response => res.status(200).end(JSON.stringify(response)))
        .catch(err => console.log(err))
}

export function saveNewProject(req: Request, res: Response) {
    const newProject = req.body
    console.log(req.body)
}
