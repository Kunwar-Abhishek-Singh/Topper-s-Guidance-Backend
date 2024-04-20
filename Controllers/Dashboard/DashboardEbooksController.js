const dashboard_eBooks_model = require("../../Model/Dashboard_model/Dashboard_eBooks_model")
exports.get_dashboard_ebooks = async (req, res)=>{
    try{
        const dashboard_ebooks = await dashboard_eBooks_model.find({})
        res.status(200).send(dashboard_ebooks)
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"})
    }
}