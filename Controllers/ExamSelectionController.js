const  exam_selection_model = require("../Model/exam_details");
exports.exam_selection = async (req, res) => {

    try {
        const exams_list = await exam_selection_model.find({}).sort({id:1})
        res.status(200).send(exams_list)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error form backend"})
        
    }

}