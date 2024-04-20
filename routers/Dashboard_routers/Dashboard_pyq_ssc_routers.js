const express = require('express');
const router = express.Router();
const dashboard_pyq_ssc = require("../../Controllers/Dashboard/DashboardPyqSscController");

router.get('/dashboardpyqssc',dashboard_pyq_ssc.get_dashboard_pyq_ssc);