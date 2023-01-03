const LanguageRoutes = require("./language.routes.js");
// const AuthenticationRoutes = require("./authen.routes.js");
// const RankingRoutes = require("./ranking.routes.js");
// const UserRoutes = require("./user.routes.js");
const route = require("../constants/routes");
function routes(app) {
  app.use(route.LANGUAGE, LanguageRoutes);
  // app.use(route.AUTH, AuthenticationRoutes);
  // app.use(route.RANKING, RankingRoutes);
  // app.use(route.USER, UserRoutes);
}
module.exports = routes;
