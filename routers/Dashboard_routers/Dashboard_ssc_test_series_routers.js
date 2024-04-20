const express = require('express');
const router = express.Router()
const dashboard_ssc_test_series = require("../../Controllers/Dashboard/DashboardSscTestSeriesController");
router.get("/dashboardssctestseries",dashboard_ssc_test_series.get_dashboard_ssc_test_series);