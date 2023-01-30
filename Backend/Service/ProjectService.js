//Dummy list of Projects - will be externalized
const project = {projectName: "Project1", projectDescription: "blah blah blah blah blah description blah blah blah"}
const project2 = {projectName: "Project2", projectDescription: "blah blah blah blah blah description blah blah blah"}
const project3 = {projectName: "Project3", projectDescription: "blah blah blah blah blah description blah blah blah"}
const project4 = {projectName: "Project4", projectDescription: "blah blah blah blah blah description blah blah blah"}
const projects = [project, project, project, project]

//Returns all projects - will eventually grab these from DB backend
function getAllProjects(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(projects));
}   

module.exports = {
    getAllProjects
}