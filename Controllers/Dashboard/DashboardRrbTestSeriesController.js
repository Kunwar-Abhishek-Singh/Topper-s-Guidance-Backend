const dashboard_rrb_test_series_model = require("../../Model/Dashboard_model/Dash_Rrb_Test_Series_model");
const Dashboard_rrb_Test_series_model = require("../../Model/Dashboard_model/Dash_Rrb_Test_Series_model");
const dashboard_books_model = require("../../Model/Dashboard_model/dashboard_books_model");

exports.get_dashboard_rrb_test_series = async (req, res)=>{
    try {
        const dashboard_rrb_test_series = await dashboard_rrb_test_series_model.find({});
        res.status(200).send(dashboard_rrb_test_series); 
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}