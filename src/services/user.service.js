const { db } = require("../../db.js");

module.exports = {
  getInfor: async (req, res) => {
    const userId = req.query.id;
    let data;
    const snapshot = await db.collection("user").get();
    snapshot.forEach((doc) => {
      if (doc.data().id === userId) {
        data = doc.data();
      }
    });
    if (data) {
      res.status(200).json(data);
    } else res.status(401).send("No information");
  },
  saveRecord: async (req, res) => {
    const body = req.body;
    console.log(body);
    await db.collection("record").add({
      userId: body.userId,
      gameCode: body.gameCode,
      score: body.score,
      startTime: body.startTime ? body.startTime : null,
      endTime: body.startTime ? body.startTime : null,
    });
    res.status(201).json({
      msg: "Saved",
    });
  },
};
