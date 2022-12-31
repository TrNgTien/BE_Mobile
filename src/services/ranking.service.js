const { db } = require("../../db.js");

module.exports = {
  getHighestScore: async (req, res) => {
    let gameCode = req.query.gameCode;
    const recordSnapshot = await db.collection("record").get();
    let records = [];
    recordSnapshot.forEach((doc) => {
      if (doc.data().gameCode === gameCode) {
        records.push(doc.data());
      }
    });

    let filteredRecords = [];
    records.forEach((record) => {
      if (record.gameCode == gameCode) {
        const existedData = filteredRecords.filter(
          (filterRecord) => filterRecord.userId == record.userId
        );
        if (JSON.stringify(existedData) !== JSON.stringify([])) {
          if (Number(record.score) > Number(existedData[0].score)) {
            const index = filteredRecords.indexOf(existedData[0]);
            filteredRecords.splice(index, 1, record);
          }
        } else {
          filteredRecords.push(record);
        }
      }
    });

    const userSnapshot = await db.collection("user").get();
    let users = [];
    userSnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    filteredRecords.map((filteredRecord) => {
      const user = users.filter((user) => user.id == filteredRecord.userId);
      if (user) {
        return (filteredRecord.user = user);
      }
    });

    filteredRecords.sort((a, b) => b.score - a.score);
    res.json(filteredRecords);
  },
};
