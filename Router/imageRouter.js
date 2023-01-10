const express = require("express");

const {addImage, allImage} = require("../Controller/imageController");

const Route = express.Router();

Route.post("/", addImage);
Route.get("/", allImage)

module.exports = Route;