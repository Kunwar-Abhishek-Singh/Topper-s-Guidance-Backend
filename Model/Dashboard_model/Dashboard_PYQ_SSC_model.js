const mongoose = require('mongoose');
const dashboard_pyq_ssc_schema= new mongoose.Schema({
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

const dashboard_pyq_ssc_model = mongoose.model("dashboardpyqssc",dashboard_pyq_ssc_schema);

module.exports = dashboard_pyq_ssc_model;