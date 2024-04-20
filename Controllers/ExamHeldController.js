const exam_held_under_model = require("../Model/exam_held")
exports.exam_held_under = async (req, res) =>{
    try {
        const exam_held_under_list = await exam_held_under_model.find({})
        res.status(200).send(exam_held_under_list)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error is from backend"})
    }
}