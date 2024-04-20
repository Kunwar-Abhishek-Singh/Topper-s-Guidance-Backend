const express = require('express');
const router = express.Router();
const dashboard_ssc_mock_test_series = require("../../Controllers/Dashboard/DashboardSscMockTestSeriesController");
router.get("/dashboardsscmocktestseries",dashboard_ssc_mock_test_series.get_dashboard_ssc_mock_test_series);