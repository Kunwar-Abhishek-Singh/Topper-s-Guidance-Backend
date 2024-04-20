const mongoose = require ('mongoose')

const dashboard_books_schema = new mongoose.Schema({
    id:{
        type:String
    },
    imageUrl:{
        type:String
    },
    bookName:{
        type:String
    },
    edition:{
        type:String
    },
    price:{
        type:String
    },
    publication:{
        type:String
    }
})

const dashboard_books_model = mongoose.model("dashboardbook",dashboard_books_schema)
module.exports = dashboard_books_model;