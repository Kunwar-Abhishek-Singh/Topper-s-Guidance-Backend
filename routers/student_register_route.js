const express = require('express');
const router = express.Router();
const student_register_controller = require("../Controllers/StudentRegisterController");

router.post('/signup', student_register_controller.student_register_data)
router.get('/get_regs_details', student_register_controller.get_student_register_data)
router.get('/getsingleuser/:email', student_register_controller.get_single_user)

module.exports = router;


