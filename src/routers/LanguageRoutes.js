const express = require("express");
const router = express.Router();
const LanguageController = require("../controller/LanguageController.js");

router.get("/check", LanguageController.checkValidLanguage);

module.exports = router;
