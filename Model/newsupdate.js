const mongoose = require ('mongoose')
const news_update_schema = new mongoose.Schema({
    section: String,
    data:[{
        id: Number,
        name: String,
        link: String
    }]
})

const news_update_model = mongoose.model("newsupdate", news_update_schema);
module.exports = news_update_model;