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
});

router.get("/machine/section/:section", function(req, res, next) {
  db.equipment.findAll({
    attributes: []
  }, {
    where: {
      section: req.params.section
    }
  }).then(function(data) {
    res.son(data);
  });
});

router.get("/machine/type/:type", function(req, res, next) {
  db.equipment.findAll({}, {
    where: {
      type: req.params.type
    }
  }).then(function(data) {
    res.son(data);
  });
});

router.get("/user/appointments/:id", function(req, res, next) {
  db.appointments.findAll({
    attributes: []
  }, {
    where: {
      user_id: req.params.id
    }
  }).then(function(data) {
    res.json(data);
  });
});

router.get("/user/:id", function(req, res, next) {
  db.user.findAll({
    attributes: []
  }).then(function() {
    res.json(data);
  });
});

router.get("", function(req, res, next) {

});

router.post("/appointment", function(req, res, next) {

});

router.post("/user", function(req, res, next) {

});

router.post("", function(req, res, next) {

});

router.post("", function(req, res, next) {

});
module.exports = router;
