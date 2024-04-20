const mongoose = require('mongoose');
const exam_held_schema = new mongoose.Schema({
    id: String,
    Exams_held_under:[{
        id: Number,
        exam: String,
        link: String,
        img_src: String
    }
    ]
})

const exam_held_under_model = mongoose.model("examheld", exam_held_schema);
module.exports = exam_held_under_model;