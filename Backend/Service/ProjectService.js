const config = require('config')
const { response } = require('express')

const mongoose = require('mongoose')
const { Project } = require("../Model/project")

const dbUsername = config.get('dbUsername')
const dbPassword = config.get('dbPassword')

const DBURI = `mongodb+srv://${dbUsername}:${dbPassword}@homepagecluster.toe2cpr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DBURI)
    .catch(err => console.log(err))


//Returns all projects
function getAllProjects(req, res) {
    Project.find()
        .then(results => {
            res.status(200).end(JSON.stringify(results))
        })
        .catch(err => console.log(err))
}

function getProjectById(req, res) {
    const id = req.params.id
    Project.findById(id)
        .then(response => res.status(200).end(JSON.stringify(response)))
        .catch(err => console.log(err))
}

module.exports = {
    getAllProjects,
    getProjectById
}