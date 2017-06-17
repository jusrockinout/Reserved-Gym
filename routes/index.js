var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../staticpages/mission.html"));
});

router.get("/amenities", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../staticpages/amenities.html"));
});

router.get("/schedule", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../staticpages/schedule.html"));
});

router.get("/reservations", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../staticpages/reservations.html"));
});

module.exports = router;
