const dashboard_related_post_model = require("../../Model/Dashboard_model/Dashboard_related_post_model")
exports.get_dashboard_related_post = async(req, res)=>{
    try {
        const dashboard_related_post = await dashboard_related_post_model.find({})
        res.status(200).send(dashboard_related_post)
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"})
    }
}