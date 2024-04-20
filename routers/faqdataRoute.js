const express = require ('express');
const router = express.Router();
const faq_data_controller = require("../Controllers/FaqDataController");
router.get("/faq_data", faq_data_controller.faq_data)
module.exports = router;