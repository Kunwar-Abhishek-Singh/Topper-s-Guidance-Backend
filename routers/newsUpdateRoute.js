const express = require ('express')
const router = express.Router();
const news_update_controller = require("../Controllers/NewsUpdateController")

router.get("/news_update", news_update_controller.news_update)

module.exports = router;