const mongoose = require ('mongoose')
const dashboard_related_post_schema = new mongoose.Schema({
    id:{
        type:Number
    },
    imageUrl:{
        type:String
    },
    Name:{
        type:String
    },
    Rank:{
        type:String
    },
    year:{
        type:Number
    },
    topic:{
        type:String
    }
})

const dashboard_related_post_model = mongoose.model("dashboardrelatedpost",dashboard_related_post_schema)
module.exports = dashboard_related_post_model;
