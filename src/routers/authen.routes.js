const express = require("express");
const router = express.Router();
const passport = require("passport");
const AuthenticationController = require("../controllers/authen.controller.js");
require("../middlewares/passport")(passport);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  AuthenticationController.authGoogle
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email", "profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/",
  }),
  AuthenticationController.authFacebook
);

module.exports = router;
