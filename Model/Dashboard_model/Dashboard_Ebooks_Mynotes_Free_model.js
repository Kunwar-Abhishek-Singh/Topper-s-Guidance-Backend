const mongoose = require('mongoose');

const Mynotes_Free_Schema = new mongoose.Schema({
    id:{
        type:Number
    },
    image:{
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
    ages:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:String
    },
    discount:{
        type:String
    },
    delivery:{
        type:String
    },
    stock:{
        type:String
    },
    dealBtn:{
        type:String
    },
    rs:{
        type:String
    },
    rightsidebar:[]
});

const Mynotes_Free_Model = mongoose.model("dashboardmyfreenotes", Mynotes_Free_Schema)
module.exports = Mynotes_Free_Model;