const LanguageService = require("../services/language.service.js");

module.exports = {
  checkValidLanguage: async (req, res) => {
    LanguageService.checkValidLanguage(req, res);
  },
};
