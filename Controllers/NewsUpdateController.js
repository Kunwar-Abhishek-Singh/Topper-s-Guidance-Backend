const news_update_model = require ("../Model/newsupdate")
exports.news_update = async(req, res) =>{
    try {
        const news_update_list = await news_update_model.find({})
        res.status(200).send(news_update_list)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error is from backend"})
        
    }
}