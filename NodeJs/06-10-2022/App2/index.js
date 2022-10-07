const express = require("express");
const mongodb = require("mongodb");
const bodyparser = require("body-parser");
const multer = require("multer");
const upload = multer();
const mongoClient = mongodb.MongoClient;
const app = express();
const port = 9797;
const dbUrl =
  "mongodb+srv://innomatic:innomatic2121@cluster0.poayja3.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyparser());

app.get("/accessdata", (req, res) => {
  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("Error while connecting with database");
      console.log(error);
    } else {
      const dbRef = cluster.db("innomaticsDB");
      const collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.find({}).toArray(function (err, data) {
        if (err) {
          res.send("Error while fetching the data from Database");
          console.log(err);
        } else {
          res.send(data);
        }
      });
    }
  });
}); // http://localhost:9797/accessdata

app.post("/userdata", upload.none(), (req, res) => {
  console.log(req.file, req.body);
  var name = req.body.uname;
  var city = req.body.ucity;
  console.log(name, city);
  // console.log("hi", req);

  var userdata = {
    name: name,
    city: city,
  };
  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("error while connectiong");
    } else {
      const dbRef = cluster.db("innomaticsDB");
      const collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.insertOne(userdata, function (err, Msg) {
        if (err) {
          res.send("Error while inserting the data");
        } else {
          res.send("Inserted Data Succesfully");
          console.log(Msg);
        }
      });
    }
  });
}); //http://localhost:9797/userdata

app.listen(port, () => {
  console.log("Server Started");
});
