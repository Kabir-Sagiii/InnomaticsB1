const express = require("express");
const mongodb = require("mongodb");

//MongoClient
const mongoClient = mongodb.MongoClient;

const app = express();
const port = 8989;
const dburl =
  "mongodb+srv://innomatic:innomatics21@cluster0.poayja3.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  //connect with cluster
  mongoClient.connect(dburl, async (error, cluster) => {
    if (error) {
      console.log(error);
      res.send("Error while connecting with DB,Try once again");
    } else {
      var dbRef = cluster.db("innomaticsDB");
      var collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.find({}).toArray((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
      //   const data = await collectionRef.find({}).toArray();
      //   console.log(data);
      //   res.send(data);
    }
  });
}); // http://localhost:8989/

app.listen(port, () => {
  console.log("Server started");
});
