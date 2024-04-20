const dashboard_books_digital_books_model = require("../../Model/Dashboard_model/Dashboard_books_digital_books_model");

exports.get_dashboard_books_digital_books = async (req, res)=>{
    try {
        const dashboard_books_digital_books = await dashboard_books_digital_books_model.find({})
        res.status(200).send(dashboard_books_digital_books);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the servere side"});
    }
}