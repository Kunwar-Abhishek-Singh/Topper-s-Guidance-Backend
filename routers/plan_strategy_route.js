const express = require('express');
const router = express.Router();
const plan_strategy_controller = require("../Controllers/PlanStrategyController");
router.get("/plan_strategy", plan_strategy_controller.plan_strategy);
module.exports = router;