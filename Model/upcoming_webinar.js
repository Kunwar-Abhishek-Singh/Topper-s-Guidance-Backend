const mongoose = require ('mongoose');
const upcoming_webinar_schema = new mongoose.Schema({
    heading: String,
    date: Number,
    month: String,
    time: String,
    name: String,
    exam: String,
    rank: String,
    supScript: String,
    content: String,
    am_pm: String,
    content_info: String
})

const upcoming_webinar_model = mongoose.model("upcomingwebinar",upcoming_webinar_schema)
module.exports = upcoming_webinar_model;