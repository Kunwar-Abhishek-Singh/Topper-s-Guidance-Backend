const express = require ('express');
const router = express.Router();
const dashboard_guidance_videos = require("../../Controllers/Dashboard/DashboardGuidanceVideosController");
const dashboard_guidance_videos_model = require("../../Model/Dashboard_model/Dashboard_guidance_videos_model");
router.get("/dashboard_guidance_videos",dashboard_guidance_videos.get_dashboard_guidance_videos);