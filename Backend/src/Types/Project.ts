import { ObjectId } from "mongoose"

export type Project = {
    _id?: ObjectId
    name: string
    projectDescription: string
    tags: string[]
}