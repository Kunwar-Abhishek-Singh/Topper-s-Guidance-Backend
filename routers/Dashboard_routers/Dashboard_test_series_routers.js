const express = require ('express')
const router = express.Router()
const dashboard_test_series = require("../../Controllers/Dashboard/DashboardTestSeriesController")
const dashboard_test_series_model = require('../../Model/Dashboard_model/Dashboard_test_series_model')
router.get("/dashboard_test_series",dashboard_test_series.get_dashbaord_test_series)