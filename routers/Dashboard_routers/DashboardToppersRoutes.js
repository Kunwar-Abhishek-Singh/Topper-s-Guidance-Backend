const express = require ('express')
const router =  express.Router()
const dashboard_toppers = require("../../Controllers/Dashboard/DashboardToppersController")
router.get("/dashboard_toppers",dashboard_toppers.get_dashboard_toppers)