var express = require("express");
var router = express.Router();
var db = require("../models");

/* GET home page. */
router.get("/machine/id/:id", function(req, res, next) {
  db.equipment.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: db.appointment
    }]
  }).then(function(data) {
    res.json(data);
  });
});

router.get("/machine/section/:section", function(req, res, next) {
  db.equipment.findAll({
    where: {
      section: req.params.section
    }
  }).then(function(data) {
    res.json(data);
  });
});

router.get("/machine/type/:type", function(req, res, next) {
  db.equipment.findAll({
    where: {
      type: req.params.type
    },
    include: [{
      model: db.appointment
    }]
  }).then(function(data) {
    res.json(data);
  });
});

router.get("/user/appointments/:id", function(req, res, next) {
  db.user.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: db.appointment
    }]
  }).then(function(data) {
    res.json(data);
  });
});

router.get("/user/:id", function(req, res, next) {
  db.user.findAll({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.json(data);
  });
});

router.post("/appointment", function(req, res, next) {
  db.appointment.create(req.body).then(function(data) {
    res.json(data);
  });
});

router.post("/user", function(req, res, next) {
  db.user.create(req.body).then(function(data) {
    res.json(data);
  });
});

// router.post("/machine", function(req, res, next) {
//
// });

router.delete("/appointment/:id", function(req, res, next) {
  db.appointment.destroy({
    where: {
      id: req.params.id
    }
  })
});
module.exports = router;
