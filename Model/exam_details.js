    const mongoose = require('mongoose');

    const exam_details_schema = new mongoose.Schema({
        id:{
            type: String
        },
        exam:{
            type: String
        }
    })

    const exam_selection_model = mongoose.model("examselection", exam_details_schema)
    module.exports = exam_selection_model;