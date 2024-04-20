const upcoming_webinar_model = require("../Model/upcoming_webinar");
exports.upcoming_webinar = async(req,res)=>{
    try{
        const webinar_list = await upcoming_webinar_model.find({})
        res.status(200).send(webinar_list)
    } catch (error){
        console.log(error);
        res.status(404).json({message:"this error from backend"})
    }
}