const plan_strategy_model = require("../Model/plan_strategy");
exports.plan_strategy = async(req, res)=>{
    try {
        const plan_strategy_list = await plan_strategy_model.find({})
        res.status(200).send(plan_strategy_list)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error from backend"})
    }
}