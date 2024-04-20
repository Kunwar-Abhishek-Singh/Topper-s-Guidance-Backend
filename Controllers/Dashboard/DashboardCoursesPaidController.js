const dashboard_courses_paid_model = require("../../Model/Dashboard_model/Dashboard_Courses_paid_model");
exports.get_dashboard_courses_paid = async (req, res)=>{
    try {
        const dashboard_courses_paid = await dashboard_courses_paid_model.find({});
        res.status(200).send(dashboard_courses_paid);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}