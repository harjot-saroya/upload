const mongoose = require("mongoose");
// const express = require("express");
// Schemas
const photoSchema = new mongoose.Schema({
  imageName: {
    type: String,
    default: "none",
    required: true
  },
  imageData: {
    type: String,
    required: true
  }
});

var Image = mongoose.model("Image", photoSchema);
module.exports = Image;
