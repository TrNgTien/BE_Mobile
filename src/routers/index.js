const LanguageRoutes = require("./language.routes.js");
const route = require("../constants/routes");
function routes(app) {
  app.use(route.LANGUAGE, LanguageRoutes);
}
module.exports = routes;