const dashboard_pyq_ssc_model = require("../../Model/Dashboard_model/Dashboard_PYQ_SSC_model");
exports.get_dashboard_pyq_ssc = async(req, res)=>{
    try {
        const dashboard_pyq_ssc = await dashboard_pyq_ssc_model.find({})
        res.status(200).send(dashboard_pyq_ssc);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}