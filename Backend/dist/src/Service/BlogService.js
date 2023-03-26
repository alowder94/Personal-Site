var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import { config } from '../../config.js';
import { BlogModel } from "../Model/blog.js";
const aboutMeBlog = "I am a Full Stack developer from Illinois. My development skills/experience are somewhat all over the place - from several Javascript/Typescript frameworks, Java applications (mainly using Springboot for REST APIs), Python, GoLang, C++, Terraform, both relational and non-relational data management, and cloud platforms including AWS and Azure. This list is ever-expanding, as I am constantly picking up side projects, and typically choose a tech stack that I have little to no experience with to complete these projects. I pride myself in being able to pump out quality work in a timely manner, and being able to pick up and leverage new technologies and skills quickly and efficiently. At the time of writing this, my professional work is primarily focused on backend, cloud hosted software solutions, and my side projects right now are mainly working with an open-source GoLang project and some front end server side rendered interfaces - such as this. The technology world is constantly changing, therefore so are my areas of focus. As Wayne Gretzky said - \"Skate to where the puck is going to be, not where it has been!\"";
const DBURI = `mongodb+srv://${config.DBUSERNAME}:${config.DBPASSWORD}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DBURI)
    .catch(err => console.log(err));
export function getAboutMe(req, res) {
    res.status(200).end(JSON.stringify(aboutMeBlog));
}
export function getAllBlogs(req, res) {
    BlogModel.find()
        .then(result => {
        res.status(200).end(JSON.stringify(result));
    });
}
//Return a blog based on the user defined Id
export function getBlogByUserId(req, res) {
    const id = req.params.id;
    BlogModel.find()
        .then(result => result.filter(each => each.id == id))
        .then(data => res.status(200).end(JSON.stringify(data.at(0))))
        .catch(err => console.log(err));
}
export function getBlogById(req, res) {
    const id = req.params.id;
    BlogModel.findById(id)
        .then(result => {
        const blog = JSON.stringify(result);
        res.statusCode = 200;
        res.end(JSON.stringify(blog));
    });
}
export function getBlogsByTags(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tagsList = req.query.tags; //TODO: should I implement some kind of typechecking here first?
        let allBlogsList = yield BlogModel.find();
        let projectBlogs = [];
        for (let tag of tagsList) {
            for (let blog of allBlogsList) {
                if (blog.tags.includes(tag)) {
                    projectBlogs.push(blog);
                    allBlogsList = allBlogsList.filter(thisBlog => thisBlog.id != blog.id);
                }
            }
        }
        res.status(200).end(JSON.stringify(projectBlogs));
    });
}
export function postBlog(req, res) {
    const newBlog = req.body;
    new BlogModel(newBlog).save((err, result) => {
        if (err) {
            res.end(JSON.stringify(err));
        }
        else {
            res.end(JSON.stringify(result));
        }
    });
}
