const mongoose = require('mongoose');
const plan_strategy_schema = new mongoose.Schema({
    id:Number,
    msg_heading:String,
    msg: String,
    name_detail: String
})
const plan_strategy_model = mongoose.model("strategydata", plan_strategy_schema);
module.exports = plan_strategy_model;