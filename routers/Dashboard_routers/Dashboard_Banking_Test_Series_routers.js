const express = require('express');
const router = express.Router();
const Dashboard_Banking_Test_Series = require("../../Controllers/Dashboard/DashboardBankingTestSeriesController");

router.get("/dashboardbanktestseries",Dashboard_Banking_Test_Series.get_Dashboard_Bank_test_series);