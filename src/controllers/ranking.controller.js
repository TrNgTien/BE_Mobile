const RankingService = require("../services/ranking.service");

module.exports = {
  getHighestScore: async (req, res) => {
    RankingService.getHighestScore(req, res);
  },
};
