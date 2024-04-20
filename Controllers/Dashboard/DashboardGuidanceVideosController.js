const dashboard_guidance_videos_model = require("../../Model/Dashboard_model/Dashboard_guidance_videos_model");
exports.get_dashboard_guidance_videos = async (req, res)=>{
    try {
        const dashboard_guidance_videos = await dashboard_guidance_videos_model.find({});
        res.status(200).send(dashboard_guidance_videos);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}