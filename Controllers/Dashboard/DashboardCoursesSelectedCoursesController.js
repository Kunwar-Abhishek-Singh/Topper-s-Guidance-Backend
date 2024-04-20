const dashboard_courses_selected_courses_model = require("../../Model/Dashboard_model/Dashboard_Courses_Selected_Courses_model");
exports.get_dashboard_courses_selected_courses = async (req,res)=>{
    try {
        const dashboard_courses_selected_courses = await dashboard_courses_selected_courses_model.find({})
        res.status(200).send(dashboard_courses_selected_courses);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error is from the server side"});
    }
}