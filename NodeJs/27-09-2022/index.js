const http = require("http");
const fs = require("fs");

const port = 7575;
const host = "127.98.89.0";

const server = http.createServer((req, res) => {
  const clientUrl = req.url;

  //   console.log(clientUrl);
  if (clientUrl === "/") {
    fs.readFile("home.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else if (clientUrl === "/service") {
    fs.readFile("service.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else if (clientUrl === "/profile") {
    fs.readFile("Profile.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else {
    fs.readFile("json.js", "utf-8", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    });

    //     fs.readFile("support.html", "utf-8", (err, data) => {
    //       if (err) throw err;
    //       res.setHeader("Content-Type", "text/html");
    //       res.end(data);
    //     });
  }
});

server.listen(port, host, () => {
  console.log("Server is Started");
});
