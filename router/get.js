const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  const ff = path.resolve(__dirname, "../client/index.html");
  res.sendFile(ff);
});

module.exports = router;
