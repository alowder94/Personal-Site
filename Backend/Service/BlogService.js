const Blog = require("../Model/Blog")
// ###################################################################################################

//Temporary Code to allow me to test functionality before provisioning database. This return value will be replaced with a database call within all of the following functions
const blog1 = {id: "1", title: "Blog1", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog2 = {id: "2", title: "Blog2", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog3 = {id: "3", title: "Blog3", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog4 = {id: "4", title: "Blog4", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog5 = {id: "5", title: "Blog5", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog6 = {id: "6", title: "Blog6", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog7 = {id: "7", title: "Blog7", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog8 = {id: "8", title: "Blog8", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}
const blog9 = {id: "9", title: "Blog9", snipet: "This is a snipet", body: ";la kdfl sdnvo dsnfvl jidjv"}

const blogList = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9]
// ###################################################################################################

function getAllBlogs(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(blogList));
}

function getBlogById (req, res) {
    const id = req.params.id;
    //TODO: query db for blog matching this id
    const blog = JSON.stringify(blog1); //Instead of blog 1 - pass data from previous call here. May not need to stringify depending on how the respone is formatted
    res.statusCode = 200;
    res.end(JSON.stringify(blog)); 
}

module.exports = {
    getAllBlogs,
    getBlogById
}