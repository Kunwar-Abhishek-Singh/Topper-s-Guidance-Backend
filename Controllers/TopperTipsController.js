const topper_tips_model = require("../Model/topperTips")
exports.topper_tips = async(req, res)=>{
    try {
        const topper_tips_list = await topper_tips_model.find({})
        res.status(200).send(topper_tips_list)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error from backend"})
        
    }
}