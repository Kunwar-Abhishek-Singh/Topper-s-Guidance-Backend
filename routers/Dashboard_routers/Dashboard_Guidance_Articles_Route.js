const express = require ('express')
const router = express.Router()
const guidance_articles = require ("../../Controllers/Dashboard/DashboardGuidanceArticleController")
router.get("/guidance_articles", guidance_articles.get_dashboard_guidance_articles)