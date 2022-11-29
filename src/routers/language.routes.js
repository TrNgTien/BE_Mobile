const express = require("express");
const router = express.Router();
const LanguageController = require("../controllers/language.controller.js");

router.post("/check", LanguageController.checkValidLanguage);

module.exports = router;
