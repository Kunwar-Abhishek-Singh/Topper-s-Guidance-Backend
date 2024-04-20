const mongoose = require ('mongoose')
const dashboard_test_series_schema = new mongoose.Schema({
    id:{
        type:String
    },
    imageUrl:{
        type:String
    },
    exam:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    },
    publication:{
        type:String
    }
})

const dashboard_test_series_model = mongoose.model("dashboardtestseries",dashboard_test_series_schema)
module.exports = dashboard_test_series_model;