const express = require('express');
const service = require('../Service/ProjectService')

const router = express.Router();

//All routes are prepended with "/projects"

//This returns all projects - used by the "Projects" page
router.get('/', service.getAllProjects)

//Will I end up needing getProjectById or addProject?

module.exports = router;