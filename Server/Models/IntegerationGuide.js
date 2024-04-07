const mongoose = require('mongoose');
const { Schema } = mongoose;

const GuideSchema = new Schema({
    Title: {
        type: String,
    },
    Description: {
        type: String,
    },
    Image: {
        type: String
    },
    Status: {
        type: String,
        enum: ["Pending","Published"]
    },
    DetailBlog: {
        type: Array
    }
})

const Guide = mongoose.model("Guide", GuideSchema)
module.exports = Guide