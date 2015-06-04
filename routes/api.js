var express = require('express');
var mongoose = require('mongoose');
var Teams = require('../models/Teams');
var router = express.Router();

router.get('/', function(req, res, next) {
  // check mongodb for ALL
  var findTeams = Teams.find(function(err, teams) {
    res.send(teams);
  });
});

router.get('/blackhawks', function(req, res, next) {
  // check mongodb for ALL
  var blackhawks = Teams.find({ team: "Blackhawks" }, function(err, blackhawks) {
    res.send(blackhawks);
  });
});

router.get('/bruins', function(req, res, next) {
  // check mongodb for ALL
  var bruins = Teams.find({ team: "Bruins" }, function(err, bruins) {
    res.send(bruins);
  });
});

router.get('/canadiens', function(req, res, next) {
  // check mongodb for ALL
  var canadiens = Teams.find({ team: "Canadiens" }, function(err, canadiens) {
    res.send(canadiens);
  });
});

router.get('/mapleleafs', function(req, res, next) {
  // check mongodb for ALL
  var mapleleafs = Teams.find({ team: "Maple Leafs" }, function(err, mapleleafs) {
    res.send(mapleleafs);
  });
});

router.get('/rangers', function(req, res, next) {
  // check mongodb for ALL
  var rangers = Teams.find({ team: "Rangers" }, function(err, rangers) {
    res.send(rangers);
  });
});

router.get('/redwings', function(req, res, next) {
  // check mongodb for ALL
  var redwings = Teams.find({ team: "Red Wings" }, function(err, redwings) {
    res.send(redwings);
  });
});

module.exports = router;
