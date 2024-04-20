const express = require ('express');
const router = express.Router();
const upcoming_webinar_controller = require("../Controllers/UpcomingWebinarController");

router.get("/upcoming_webinar", upcoming_webinar_controller.upcoming_webinar)
module.exports = router;