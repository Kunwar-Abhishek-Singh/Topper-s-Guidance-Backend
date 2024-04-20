const mongoose = require ('mongoose');
const blog_schema = new mongoose.Schema({
    img_src: String,
    heading: String,
    data: String
})

const blog_data_model = mongoose.model("blogsdata", blog_schema)
module.exports = blog_data_model;