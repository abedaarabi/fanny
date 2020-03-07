const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const getRoute = require("./router/get");
app.use(express.static("client"));

app.use("/", getRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = router;
