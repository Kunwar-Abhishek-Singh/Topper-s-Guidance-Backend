const mongoose = require ('mongoose')


const dashboard_guidance_articles_schema = new mongoose.Schema({
    id:{
        type: String
    },
    imageUrl:{
        type: String
    },
    topic:{
        type: String
    }
})
const dashboard_guidance_articles_model = mongoose.model("article", dashboard_guidance_articles_schema)
module.exports = dashboard_guidance_articles_model;