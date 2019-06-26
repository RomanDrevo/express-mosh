const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Lalala")
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 6]);
});

const port = process.env.PORT || 2001;

app.listen(port, ()=> console.log("Listening 2000.."));