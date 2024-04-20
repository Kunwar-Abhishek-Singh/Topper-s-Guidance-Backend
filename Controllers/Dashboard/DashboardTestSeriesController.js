const dashboard_test_series_model = require('../../Model/Dashboard_model/Dashboard_test_series_model')
exports.get_dashbaord_test_series = async (req, res)=>{
    try {
        const dashboard_test_series = await dashboard_test_series_model.find({})
        res.status(200).send(dashboard_test_series)
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"})
    }
}