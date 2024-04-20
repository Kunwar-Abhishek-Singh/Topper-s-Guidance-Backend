const dashboard_ebooks_digital_books_paid = require("../../Model/Dashboard_model/Dashboard_ebooks_digital_books_paid_model");

exports.get_dashboard_ebooks_digital_books_paid = async (req, res)=>{
    try {
        const dashboard_ebooks_digital_books_paid_list = await dashboard_ebooks_digital_books_paid.find({});
        res.status(200).send(dashboard_ebooks_digital_books_paid_list);
    } catch (error) {
        console.log(error);
        res.status(404).json({messege:"this error is from the server side"});
    }
}