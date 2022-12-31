const AuthenticationService = require("../services/authen.service.js");

module.exports = {
  authGoogle: async (req, res) => {
    AuthenticationService.authGoogle(req, res);
  },
  authFacebook: async (req, res) => {
    AuthenticationService.authFacebook(req, res);
  },
};
