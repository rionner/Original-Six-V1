var express = require('express');
var mongoose = require('mongoose');
var Teams = require('../models/Teams');

// this should be where you declare json data
var data;

// count out seasons for validation

if (data.length > 0) {
  var i = 0;
  console.log(data);
  for (var season in data) {
    i++;
    // entire season
    //console.log(data[key]);
    console.log(i)
    Teams.create(data[season], function (err, season) {
      // console.log(season);
      console.log("season added!");
    });
  }
}
