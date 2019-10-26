const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true
});
const conn = mongoose.connection;
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Get request recieved");
});

app.post("/putData", (req, res) => {
  var ObjectID = require("mongodb").ObjectID;
  console.log(req.body);
  const message = req.body;
  const _id = new ObjectID();
  //   if ((!id && id !== 0) || !message) {
  //     return res.json({
  //       success: false,
  //       error: "INVALID INPUTS"
  //     });
  //   }
  conn.collection("test").insertOne({ _id: _id, message: message });
  console.log("yerr");
  return res.json({ success: true });
});

app.listen(3000, () => console.log("listening on port 3000"));
