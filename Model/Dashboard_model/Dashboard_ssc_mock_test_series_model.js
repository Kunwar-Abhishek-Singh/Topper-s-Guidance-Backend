const mongoose = require('mongoose');
const dashboard_ssc_mock_test_series_Schema = new mongoose.Schema({
    id:{
        type:Number
    },
    imgUrl:{
        type:String
    },
    examName:{
        type:String
    },
    totalTest:{
        type:String
    },
    medium:{
        type:String
    },
    type1:{
        type:String
    },
    type2:{
        type:String
    },
    type3:{
        type:String
    },
    type4:{
        type:String
    },
    button:{
        type:String
    },
    rightSideBar:[]
})

const dashboard_ssc_mock_test_series_model = mongoose.model("dashboardsscmocktestseries",dashboard_ssc_mock_test_series_Schema);
module.exports = dashboard_ssc_mock_test_series_model;