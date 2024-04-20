const express = require('express');
const router = express.Router();
const dashboard_pyq_rrb = require("../../Controllers/Dashboard/DashboardPyqRrbController");

router.get('/dashboardpyqrrb',dashboard_pyq_rrb.get_dashboard_pyq_rrb);