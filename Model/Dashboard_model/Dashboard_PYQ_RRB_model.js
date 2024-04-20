const mongoose = require('mongoose');
const dashboard_pyq_rrb_schema= new mongoose.Schema({
    id:{
        type:Number
    },
    year:{
        type:Number
    },
    pyq:{
        type:String
    },
    examName:{
        type:String
    },
    rightSideBar:[String]
})  

const dashboard_pyq_rrb_model = mongoose.model("dashboardpyqrrb",dashboard_pyq_rrb_schema);

module.exports = dashboard_pyq_rrb_model;