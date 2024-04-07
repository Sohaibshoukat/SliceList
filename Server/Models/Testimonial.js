const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestimonialSchema = new Schema({
    Title: {
        type: String,
    },
    Rating: {
        type: String,
    },
    Profile: {
        type: String
    },
    Name: {
        type: String,
    },
    Company: {
        type: String,
    },
    Position: {
        type: String,
    },
    Description: {
        type: String
    }
})

const Testimonial = mongoose.model("Testimonial", TestimonialSchema)
module.exports = Testimonial