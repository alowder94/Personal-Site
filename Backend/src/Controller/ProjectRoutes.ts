import express from 'express'
import {getAllProjects} from '../Service/ProjectService.js' 

const router = express.Router();

//All routes are prepended with "/projects"

//This returns all projects - used by the "Projects" page
router.get('/', getAllProjects)

//Will I end up needing getProjectById or addProject?

export const projectRoutes = router
