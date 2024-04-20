const express = require ('express');
const router = express.Router();
const subheader_controller = require("../Controllers/SubHeaderController")

router.get("/subheader",subheader_controller.subheader)
module.exports = router;