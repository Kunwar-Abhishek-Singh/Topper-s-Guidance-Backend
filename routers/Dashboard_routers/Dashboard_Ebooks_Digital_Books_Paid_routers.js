const express = require('express');
const router = express.Router();
const dashboard_ebooks_digital_books_paid = require('../../Controllers/Dashboard/DashboardEbooksDigitalBooksPaidController');
// const dashboard_ebooks_digital_books_paid = require('../../Model/Dashboard_model/Dashboard_ebooks_digital_books_paid_model');

router.get("dashboard_ebooks_digital_books_paid",dashboard_ebooks_digital_books_paid.get_dashboard_ebooks_digital_books_paid);


module.exports = router;