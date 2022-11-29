const LanguageService = require("../services/LanguageService.js");

module.exports = {
  checkValidLanguage: async (req, res) => {
    LanguageService.checkValidLanguage(req, res);
  },
};
