const express = require ('express');
const router = express.Router()
const Mynotes_Free = require("../../Controllers/Dashboard/DashboardEbooksMyNotesFreeController");

router.get("/dashboard_ebooks_mynote_free",Mynotes_Free.get_Mynotes_Free);

module.exports = router;