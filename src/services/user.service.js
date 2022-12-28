const { db } = require("../../db.js");

module.exports = {
  getInfor: async (req, res) => {
    const userId = req.query.id;
    console.log(req.query);
    let data = {};
    const snapshot = await db.collection("user").get();
    snapshot.forEach((doc) => {
      if (doc.data().id === userId) {
        data = doc.data();
      }
    });

    const recordSnapshot = await db.collection("record").get();
    const records = [];
    recordSnapshot.forEach((doc) => {
      if (doc.data().userId === userId) {
        records.add(doc.data());
      }
    })
    const latestRecord = Math.max.apply(Math, records.map((record) => record.startTime));
    
    if (data) {
      console.log(data);
      data.latestRecord = latestRecord ? latestRecord : null;
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
