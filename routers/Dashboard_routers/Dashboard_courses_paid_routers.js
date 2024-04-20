const express = require('express');
const router = express.Router();
const dashboard_courses_paid = require("../../Controllers/Dashboard/DashboardCoursesPaidController");

router.get("/popularcourses",dashboard_courses_paid.get_dashboard_courses_paid);
