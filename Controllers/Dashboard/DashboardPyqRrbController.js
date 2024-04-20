const dashboard_pyq_rrb_model = require("../../Model/Dashboard_model/Dashboard_PYQ_RRB_model");
exports.get_dashboard_pyq_rrb = async(req, res)=>{
    try {
        const dashboard_pyq_rrb = await dashboard_pyq_rrb_model.find({})
        res.status(200).send(dashboard_pyq_rrb);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}