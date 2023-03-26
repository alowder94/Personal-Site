import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        snipet: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        }
}
);

export const BlogModel = mongoose.model('Blog', blogSchema)
