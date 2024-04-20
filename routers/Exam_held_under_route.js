const express = require ('express');
const router = express.Router();
const exam_held_controller = require("../Controllers/ExamHeldController");

router.get("/exam_held_under", exam_held_controller.exam_held_under)

module.exports = router;