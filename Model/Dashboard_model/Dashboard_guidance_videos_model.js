const mongoose = require ('mongoose');
const dashboard_guidance_videos_schema = new mongoose.Schema({
    sname:{
        type:String
    },
     imgsrc:{
        type:String
     },
     title:{
        type:String
     },
     link:{
        type:String
     }
})
const dashboard_guidance_videos_model = mongoose.model("guidancevideo",dashboard_guidance_videos_schema);
module.exports = dashboard_guidance_videos_model;