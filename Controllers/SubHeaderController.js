const subheader_model = require("../Model/subheader")
exports.subheader = async(req, res)=>{
    try {
        const subheader_list = await subheader_model.find({})
        res.status(200).send(subheader_list)
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"this error from backend"})
        
    }
}