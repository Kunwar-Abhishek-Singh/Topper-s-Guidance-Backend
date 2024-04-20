const mongoose = require ('mongoose');
const dashboard_courses_selected_courses_Schema = new mongoose.Schema({
    id:{
        type:Number
    },
    image:{
        type:String
    },
    subtitle:{
        type:String
    },
    button:{
        type:String
    }
});

const dashboard_courses_selected_courses_model = mongoose.model("selectedcourses",dashboard_courses_selected_courses_Schema);
module.exports = dashboard_courses_selected_courses_model;