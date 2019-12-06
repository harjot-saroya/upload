const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
//app.use(multer);
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true
});
const conn = mongoose.connection;

var photoSchema = new mongoose.Schema({
  img: { data: Buffer, contentType: String }
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/Users/harjo/Desktop/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  }
});
var upload = multer({
  storage: storage
});
var pic = mongoose.model("pic", photoSchema);

//app.use(multer);
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Get request recieved");
});

app.post("/putData", multer(upload).single("image"), (req, res) => {
  console.log("yes");
  var img = fs.readFileSync(req.file.path);
  console.log("aa");
  var encode_img = img.toString("base64");
  var ObjectID = require("mongodb").ObjectID;
  console.log(req.body);

  var finalimg = {
    contentType: req.file.mimetype,
    image: new Buffer(encode_img, "base64")
  };
  const message = req.body;
  const _id = new ObjectID();
  conn.collection("test").insertOne(finalimg, (err, result) => {
    console.log(result);
    if (err) return console.log(err);
    console.log("Sucessfully saved to DB");
    res.redirect("/home");
  });
  return res.json({ success: true });
});

app.get("/getData", (req, res) => {
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
  conn.collection("test").find();
  return res.json({ success: true });
});

app.post("/getPhoto", (req, res) => {
  return res.json({ success: true });
});

app.post("/fetchAll", (req, res) => {
  var photo = mongoose.model("Photos");
  photo.find({}, ["path", "caption"], { sort: { _id: -1 } }, function(
    err,
    photos
  ) {
    if (err) throw err;
    res.render("index");
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
