const mongoose = require('mongoose');
const dashboard_courses_paid_Schema = new mongoose.Schema({
    id:{
        type:Number
    },
    coursesName:{
        type:String
    },
    startBatch:{
        type:String
    },
    image:{
        type:String
    },
    teacherName:{
        type:String
    },
    testSeries:[
        String
    ]
})

const dashboard_courses_paid_model = mongoose.model("popularcourses",dashboard_courses_paid_Schema);
module.exports = dashboard_courses_paid_model;