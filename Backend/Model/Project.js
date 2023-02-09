mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        projectDescription: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        }
    }
)

const Project = mongoose.model('Project', projectSchema)

module.exports = {
    Project
}