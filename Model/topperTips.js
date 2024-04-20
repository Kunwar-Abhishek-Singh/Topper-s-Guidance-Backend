const mongoose = require('mongoose');

const topper_tips_schema = new mongoose.Schema({
    id:Number,
    name:String,
    exam:String,
    topic:String,
    topic_info:String
})

const topper_tips_model = mongoose.model("toppertips",topper_tips_schema)
module.exports = topper_tips_model;