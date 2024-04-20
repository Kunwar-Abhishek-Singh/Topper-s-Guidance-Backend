const express = require ('express');
const router = express.Router();
const exam_selection_controller = require("../Controllers/ExamSelectionController")

router.get("/exam_selection", exam_selection_controller.exam_selection)

module.exports = router;