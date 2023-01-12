const express = require('express');
const router = express.Router();
const service = require('../Service/BlogService')

//All routes are prepended with "/blogs"

//This returns all blogs - used by the "Blogs" page
router.get('/', service.getAllBlogs)

// //This returns a single blog based on the id - this will be used to display a particular blog on the blog/id page
router.get('/:id', service.getBlogById)

// //This is an internal interface only - used for me to post blogs without having to go directly to DB
// router.post('/', service.postBlog)

module.exports = router;