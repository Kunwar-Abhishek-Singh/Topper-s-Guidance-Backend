const express = require ('express');
const router = express.Router();
const dashboard_courses_selected_courses = require("../../Controllers/Dashboard/DashboardCoursesSelectedCoursesController");
const dashboard_courses_selected_courses = require("../../Model/Dashboard_model/Dashboard_Courses_Selected_Courses_model");
router.get("selectedcourses",dashboard_courses_selected_courses.get_dashboard_courses_selected_courses);