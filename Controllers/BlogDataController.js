const blog_data_model = require("../Model/blog_data")
exports.blog_data = async(req, res)=>{
    try {
        const blog_data_list = await blog_data_model.find({})
        res.status(200).send(blog_data_list)
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"this error from backend"})
    }
}