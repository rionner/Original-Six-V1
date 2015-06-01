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
  var hawks = Teams.find({ team: "Blackhawks" }, function(err, hawks) {
    res.send(hawks);
  });
});


router.get('/canadiens', function(req, res, next) {
  // check mongodb for ALL
  var losers = Teams.find({ team: "Canadiens" }, function(err, losers) {
    res.send(losers);
  });
});


module.exports = router;
