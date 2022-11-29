const LanguageRoutes = require("./LanguageRoutes.js");
const route = require("../constants/routes");
function routes(app) {
  app.use(route.LANGUAGE, LanguageRoutes);
}
module.exports = routes;