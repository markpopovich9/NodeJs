
const moment = require("moment");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const HOST = "127.0.0.1";
const PORT = 8000;

function getdate() {
  const date = moment();
  return date.format("YYYY/DD/MM HH:mm:ss");
}

app.get("/timestamp", (req, res) => {
  res.json({ timestamp: getdate() });
});

app.get("/posts", (req, res) => {
  const PathToFile = path.join(__dirname, "products.json");
  fs.readFile(PathToFile, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка чтения файла" });
    }

    let posts = JSON.parse(data);

    let  skip = req.query.skip;
    let take = req.query.take;
    if ( isNaN(skip)) {
      return res.status(400).json({ error: "skip должен быть числом" });
    }
    if (isNaN(take)) {
      return res.status(400).json({ error: "take должен быть числом" });
    }



    posts = posts.slice(skip, take);

    res.json(posts);
  });
});


app.get("/posts/:id", (req, res) => {
  const PathToFile = path.join(__dirname, "products.json");
  fs.readFile(PathToFile, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка чтения файла" });
    }

    const posts = JSON.parse(data);
    const id = req.params.id;


    res.json(post);
  });
});

app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});