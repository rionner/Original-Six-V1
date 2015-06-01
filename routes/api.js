var express = require('express');
var mongoose = require('mongoose');
var Teams = require('../models/Teams');
var router = express.Router();

router.get('/', function(req, res, next) {
  var findTeams = Teams.find(function(err, teams) {
    res.send(teams);
  })
});



module.exports = router;
