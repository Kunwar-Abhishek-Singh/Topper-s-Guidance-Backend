const dashboard_guidance_articles_model = require("../../Model/Dashboard_model/dashboard_guidance_articles_routes")
exports.get_dashboard_guidance_articles = async (req, res)=>{
    try {
        const guidance_articles = await dashboard_guidance_articles_model.find({})
        res.status(200).send(guidance_articles)
    } catch (error) {
        console.log(error);
        res.status(404).json({message: "this error is from the server side"})
        
    }
}