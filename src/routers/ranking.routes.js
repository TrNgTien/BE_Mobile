const express = require("express");
const router = express.Router();
const RankingControllers = require("../controllers/ranking.controller");

router.get("/", RankingControllers.getHighestScore);

module.exports = router;
