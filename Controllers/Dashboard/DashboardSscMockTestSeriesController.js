const dashboard_ssc_mock_test_series_model = require("../../Model/Dashboard_model/Dashboard_ssc_mock_test_series_model");
exports.get_dashboard_ssc_mock_test_series = async(req, res)=>{
    try {
        const dashboard_ssc_mock_test_series = await dashboard_ssc_mock_test_series_model.find({});
        res.status(200).send(dashboard_ssc_mock_test_series);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}