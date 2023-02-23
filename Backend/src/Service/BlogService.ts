import config from 'config'
import mongoose from 'mongoose'
import { Request, Response } from 'express'
import { Blog } from "../Model/blog.js"

const dbUsername = process.env.dbUsername
const dbPassword = process.env.dbPassword

const DBURI = `mongodb+srv://${dbUsername}:${dbPassword}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DBURI)
    .catch(err=> console.log(err))

export function getAllBlogs(req: any, res: any) {
    Blog.find()
        .then(result => {
            res.status(200).end(JSON.stringify(result))
        }
        )
}   

export function getBlogById (req: Request, res: Response) {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            const blog = JSON.stringify(result);
            res.statusCode = 200;
            res.end(JSON.stringify(blog)); 
        })
}

export async function getBlogsByTags (req: Request, res: Response) {
    const tagsList = req.query.tags as string[] //TODO: should I implement some kind of typechecking here first?
    let allBlogsList = await Blog.find();
    let projectBlogs = []

    for(let tag of tagsList) {
        for (let blog of allBlogsList) {
            if (blog.tags.includes(tag)){
                projectBlogs.push(blog);
                allBlogsList = allBlogsList.filter(thisBlog => thisBlog.id != blog.id)
            }
        }
    }

    res.status(200).end(JSON.stringify(projectBlogs))
}