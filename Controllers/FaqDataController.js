const faqdata_model = require("../Model/faqdataModel");
exports.faq_data = async(req, res)=>{
    try{
        const faqdata_list = await faqdata_model.find({})
        res.status(200).send(faqdata_list)
    }
    catch(error){
        console.log(error);
        res.status(404).json({message:"this error from backend"})
    }
}