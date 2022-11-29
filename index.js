const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
const dotenv = require("dotenv").config();
// const connectDb = require("./src/database/mongodb_connection");

// const mode = process.env.NODE_ENV || "development";
// const config = require("config").get(mode);

// const PORT = process.env.PORT || config.port;
const PORT = 8080;
// connectDb();

app.get("/", (req, res) => {
  return res.send("REST called successfully!");
});
app.get("/test", (req, res) => {
  return res.send("test33!");
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
