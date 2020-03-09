const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const getRoute = require("./router/get");
app.use(express.static("client"));
const PORT = process.env.PORT || 5000;
const DATE = new Date();

app.use("/", getRoute);

//add port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} ${DATE}`);
});

// module.exports = router;
