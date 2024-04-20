const dashboard_books_model = require("../../Model/Dashboard_model/dashboard_books_model");

exports.get_dashboard_books = async (req, res)=>{
    try {
        const dashboard_books = await dashboard_books_model.find({})
        res.status(200).send(dashboard_books);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}