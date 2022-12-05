const LanguageRoutes = require("./language.routes.js");
const AuthenticationRoutes = require("./authen.routes.js");
const route = require("../constants/routes");
function routes(app) {
  app.use(route.LANGUAGE, LanguageRoutes);
  app.use(route.AUTH, AuthenticationRoutes);
}
module.exports = routes;
