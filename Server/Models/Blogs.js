const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogsSchema = new Schema({
    Title: {
        type: String,
    },
    Date: {
        type: Date,
        default: new Date
    },
    SubHeading: {
        type: String,
    },
    Image: {
        type: String
    },
    Status: {
        type: String,
        enum: ["Pending", "Published"]
    },
    DetailBlog: {
        type: Array
    }
})

const Blogs = mongoose.model("Blogs", BlogsSchema)
module.exports = Blogs