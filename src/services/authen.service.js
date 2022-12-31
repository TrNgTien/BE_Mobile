module.exports = {
  authGoogle: async (req, res) => {
    res.json(req.user);
  },
  authFacebook: async (req, res) => {
    res.json(req.user);
  },
};
