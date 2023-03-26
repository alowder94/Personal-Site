import { ObjectId } from "mongoose"

export type Blog = {
    _id?: ObjectId
    id: string
    title: string
    snipet: string
    body: string
    tags: string[]
}