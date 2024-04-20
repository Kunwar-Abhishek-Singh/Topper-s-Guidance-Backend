const mongoose = require ('mongoose')
const dashboard_ebooks_schema = new mongoose.Schema({
    id:{
        type:String
    },
    imageUrl:{
        type:String
    },
    bookName:{
        type:String
    },
    medium:{
        type:String
    },
    price:{
        type:String
    }
})

const dashboard_ebooks_model = mongoose.model("dashboardebook",dashboard_ebooks_schema)
module.exports = dashboard_ebooks_model;