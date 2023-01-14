const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/user", function (req, res) {
  res.send("Hello World from user");
});

app.listen(3000, function () {
  console.log("Server is up and running...");
});
