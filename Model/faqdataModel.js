const mongoose = require ('mongoose');
const faqdata_schema = new mongoose.Schema({
    id:Number,
    question: String,
    answer: String
})
const faqdata_model = mongoose.model("faqdata", faqdata_schema);
module.exports = faqdata_model;