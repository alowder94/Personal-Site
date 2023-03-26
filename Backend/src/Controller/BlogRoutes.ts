import express, { Router } from 'express';
import {getAllBlogs, getBlogsByTags, getBlogById, getBlogByUserId, postBlog, getAboutMe} from '../Service/BlogService.js';


const router = express.Router();

//All routes are prepended with "/blogs"

//This returns all blogs - used by the "Blogs" page
router.get('/', getAllBlogs);

router.get('/aboutme', getAboutMe);

//This is used by projects functionality - gets the blog based on their tags
router.get('/tags', getBlogsByTags);

// //This returns a single blog based on the id - this will be used to display a particular blog on the blog/id page
router.get('/:id', getBlogById);

//This returns a single blog based on the user defined id - not the "long" that is defined by MongoDB
router.get('/id/:id', getBlogByUserId);

// //This is an internal interface only - used for me to post blogs without having to go directly to DB
router.post('/', postBlog);

export const blogRoutes = router;
