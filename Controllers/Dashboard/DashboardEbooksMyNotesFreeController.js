const Mynotes_Free_Model = require('../../Model/Dashboard_model/Dashboard_Ebooks_Mynotes_Free_model');

exports.get_Mynotes_Free = async (req, res) => {
    try {
        const Mynotes_Free = await Mynotes_Free_Model.find({})
        res.status(200).send(Mynotes_Free)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error is from the server side"})
    }
}