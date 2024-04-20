const mongoose = require('mongoose');
const dashboard_ebooks_digital_books_paid_schema = new mongoose.Schema({
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

const dashboard_ebooks_digital_books_paid = mongoose.model("ebooksdigitalbookspaid",dashboard_ebooks_digital_books_paid_schema);
module.exports = dashboard_ebooks_digital_books_paid;