const config = require('config')

const mongoose = require('mongoose')
const { Blog } = require("../Model/blog")

const dbPassword = config.get('dbPassword')

const DBURI = `mongodb+srv://testing:${dbPassword}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`
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

module.exports = {
    getAllBlogs,
    getBlogById
}