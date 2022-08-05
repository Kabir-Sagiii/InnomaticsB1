var fs = require("fs");

var filecontent = fs.readFileSync("./Header.js", "utf-8");
console.log(filecontent);
fs.writeFileSync("demo2.js", filecontent);
