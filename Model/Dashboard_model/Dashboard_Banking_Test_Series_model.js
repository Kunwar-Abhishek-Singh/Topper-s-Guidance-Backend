const mongoose = require ('mongoose');

const Dashboard_Bank_test_series_Schema = new mongoose.Schema({
    id:{
        type:Number
    },
    imgUrl:{
        type:String
    },
    examName:{
        type:String
    },
    totalNo:{
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

const Dashboard_Banking_Test_Series_model = mongoose.model("dashboardbanktestseries",Dashboard_Bank_test_series_Schema)

module.exports = Dashboard_Banking_Test_Series_model;
