const mongoose = require('mongoose');

const topper_card_details_schema = new mongoose.Schema({
    exam_id: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    name:{ 
        type: String,
        required: true
    },
    exam_topped:{
        type: String,
        required: true
    },
    exam_year:{
        type: Number,
        required: true
    },
    air:{
        type: String,
        required: true
    },
    followers:{
        type: String,
        required: true
    },
    likes:{
        type: String,
        required: true
    },
    btn1:{
        type: String,
    },
    btn2:{
        type: String,
    },
    to:{
        type: String
    }
})
const topper_card_details_model  = mongoose.model("carddetail", topper_card_details_schema)
module.exports = topper_card_details_model;