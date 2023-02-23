import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const projectSchema = new Schema({
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
});
export const Project = mongoose.model('Project', projectSchema);
