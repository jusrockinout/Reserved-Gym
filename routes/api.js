var express = require("express");
var router = express.Router();
var db = require("../models");

/* GET home page. */
router.get("/machine/id/:id", function(req, res, next) {
  db.equipment.findAll({

  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.json(data);
  });
  res.json();
});

router.get("/machine/section/:section", function(req, res, next) {

});

router.get("/machine/type/:type", function(req, res, next) {

});

router.get("/user/appointments/:id", function(req, res, next) {

});

router.get("/user/:id", function(req, res, next) {

});

router.get("", function(req, res, next) {

});

module.exports = router;
