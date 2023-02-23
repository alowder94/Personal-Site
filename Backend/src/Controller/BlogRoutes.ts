import express from 'express';
import {getAllBlogs, getBlogsByTags, getBlogById} from '../Service/BlogService.js';


const router = express.Router();

//All routes are prepended with "/blogs"

//This returns all blogs - used by the "Blogs" page
router.get('/', getAllBlogs)

router.get('/tags', getBlogsByTags)

// //This returns a single blog based on the id - this will be used to display a particular blog on the blog/id page
router.get('/:id', getBlogById)

// //This is an internal interface only - used for me to post blogs without having to go directly to DB
// router.post('/', service.postBlog)

export const blogRoutes = router;
