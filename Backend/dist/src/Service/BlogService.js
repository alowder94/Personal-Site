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
import { Blog } from "../Model/blog.js";
const DBURI = `mongodb+srv://${config.DBUSERNAME}:${config.DBPASSWORD}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DBURI)
    .catch(err => console.log(err));
export function getAllBlogs(req, res) {
    Blog.find()
        .then(result => {
        res.status(200).end(JSON.stringify(result));
    });
}
export function getBlogById(req, res) {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
        const blog = JSON.stringify(result);
        res.statusCode = 200;
        res.end(JSON.stringify(blog));
    });
}
export function getBlogsByTags(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tagsList = req.query.tags; //TODO: should I implement some kind of typechecking here first?
        let allBlogsList = yield Blog.find();
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
