
const moment = require("moment");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const HOST = "127.0.0.1"
const PORT = 8000;

function getdate() {
  const date = moment();
  return date.format("YYYY/DD/MM HH:mm:ss");
}

app.get("/timestamp", (req, res) => {
  res.json({ timestamp: getdate()});
});

app.get("/posts", (req, res) => {
  const PathToFile = path.join(__dirname, "products.json");
  fs.readFile(PathToFile, "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
});


app.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})