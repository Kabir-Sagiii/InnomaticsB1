const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 7474;

app.get("/", (req, res) => {
  res.send(`<h2>Express JS</h2>
                  <ol>  
                   <li>Express JS </li>
                  <li> Node JS </li>
                  </ol>
       `); // http://localhost:7474/
});

app.get("/json", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  }); //http://localhost:7474/json
});

app.get("/html", (req, res) => {
  fs.readFile("home.html", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  }); //http://localhost:7474/html
});
app.get("/htmlService", (req, res) => {
  fs.readFile(
    path.join(__dirname, "public", "service.html"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

app.listen(port, () => {
  console.log("Server Started");
});
