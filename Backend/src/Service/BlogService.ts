import mongoose from 'mongoose'
import { config } from '../../config.js'

import { Request, Response } from 'express'
import { BlogModel } from "../Model/blog.js"
import { Blog } from '../Types/Blog.js'

const DBURI = `mongodb+srv://${config.DBUSERNAME}:${config.DBPASSWORD}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DBURI)
    .catch(err=> console.log(err))

export function getAllBlogs(req: Request, res: Response) {
    BlogModel.find()
        .then(result => {
            res.status(200).end(JSON.stringify(result))
        }
        )
}   

export function getBlogById (req: Request, res: Response) {
    const id = req.params.id;
    BlogModel.findById(id)
        .then(result => {
            const blog = JSON.stringify(result);
            res.statusCode = 200;
            res.end(JSON.stringify(blog)); 
        })
}

export async function getBlogsByTags (req: Request, res: Response) {
    const tagsList = req.query.tags as string[] //TODO: should I implement some kind of typechecking here first?
    let allBlogsList: Blog[] = await BlogModel.find();
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

export function postBlog(req: Request, res: Response) {
    const newBlog: Blog = req.body;
    new BlogModel(newBlog).save((err, result) => {
        if(err) {
            res.end(JSON.stringify(err))
        } else {
            res.end(JSON.stringify(result))
        }
    })
}