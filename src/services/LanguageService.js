const dictionary = require("@vntk/dictionary");

module.exports = {
  checkValidLanguage: async (req, res) => {
    const clientText = req.body.text;
    if (dictionary.has(clientText)) {
      return res.status(200).json({
        message: "Hợp lệ",
      });
    }
    return res.status(400).json({
      message: "Không Hợp lệ",
    });
  },
};
