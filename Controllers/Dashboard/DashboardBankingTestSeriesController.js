const Dashboard_Banking_Test_Series_model = require("../../Model/Dashboard_model/Dashboard_Banking_Test_Series_model");

exports.get_Dashboard_Bank_test_series = async (req, res)=>{
    try {
        const Dashboard_Banking_Test_Series = await Dashboard_Banking_Test_Series_model.find({})
        res.status(200).send(Dashboard_Banking_Test_Series);
    } catch (error) {
        console.log(error);
        res.status(404).json({messases:"this error is from the server side"})
    }
}



