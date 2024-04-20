const mongoose = require('mongoose');

const subheader_schema = new mongoose.Schema({
    id:String,
    data:[{
        id:Number,
        heading:String,
        p_tag:String,
        img_src:String
    }]
})

const subheader_model = mongoose.model("subheaderdata", subheader_schema)
module.exports = subheader_model;