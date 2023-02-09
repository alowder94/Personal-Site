const config = require('config')

const mongoose = require('mongoose')
const { Blog } = require("../Model/blog")

const dbUsername = config.get('dbUsername')
const dbPassword = config.get('dbPassword')

const DBURI = `mongodb+srv://${dbUsername}:${dbPassword}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DBURI)
    .catch(err => console.log(err))

function getAllBlogs(req, res) {
    Blog.find()
        .then(result => {
            res.status(200).end(JSON.stringify(result))
        }
        )
}   

function getBlogById (req, res) {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            const blog = JSON.stringify(result);
            res.statusCode = 200;
            res.end(JSON.stringify(blog)); 
        })
}

async function getBlogsByTags (req, res) {
    const tagsList = req.query.tags
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

module.exports = {
    getAllBlogs,
    getBlogById,
    getBlogsByTags
}