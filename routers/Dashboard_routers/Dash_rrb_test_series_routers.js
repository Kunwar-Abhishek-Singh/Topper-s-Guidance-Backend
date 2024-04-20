const express = require ('express');
const router = express.Router();
const dashboard_rrb_test_series = require("../../Controllers/Dashboard/DashboardRrbTestSeriesController");

router.get("/dashboardrrbtestseries",dashboard_rrb_test_series.get_dashboard_rrb_test_series);