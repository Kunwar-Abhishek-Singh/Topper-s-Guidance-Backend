const mongoose = require ('mongoose')

const dashboard_topper_schema = new mongoose.Schema({
    id:{
        type: String
    },
    imageUrl:{
        type:String
    },
    name:{
        type:String
    },
    rank:{
        type:String
    },
    description:{
        type:String
    }
})

const dashboard_toppers_model = mongoose.model("dashboardtoppers",dashboard_topper_schema)
module.exports = dashboard_toppers_model;