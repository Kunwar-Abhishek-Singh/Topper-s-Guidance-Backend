const dashboard_toppers_model = require("../../Model/Dashboard_model/dashboard_toppers")
exports.get_dashboard_toppers = async (req, res)=>{
    try {
        const dashboard_toppers = await dashboard_toppers_model.find({})
        res.status(200).send(dashboard_toppers)        
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"})
    }
}