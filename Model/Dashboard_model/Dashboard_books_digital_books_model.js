const mongoose = require('mongoose');
const dashboard_books_digital_books_schema = new mongoose.Schema({
    id:{
        type:Number
    },
    imgUrl:{
        type:String
    },
    title:{
        type:String
    },
    author:{
        type:String
    },
    format:{
        type:String
    },
    rating:{
        type:String
    },
    price:{
        type:String
    },
    rightSideBar:[String]
});

const dashboard_books_digital_books_model = mongoose.model("booksdigitalbook",dashboard_books_digital_books_schema);
module.exports = dashboard_books_digital_books_model;