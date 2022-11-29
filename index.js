const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const routes = require("./src/routers/index.js");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
const PORT = 8080;

routes(app);
app.get("/", (req, res) => {
  return res.send("REST called successfully!");
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
