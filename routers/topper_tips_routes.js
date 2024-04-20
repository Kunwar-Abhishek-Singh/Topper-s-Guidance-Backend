const express = require ('express');
const router = express.Router();
const topper_tips_controller = require("../Controllers/TopperTipsController");
router.get("/topper_tips", topper_tips_controller.topper_tips)

module.exports = router;