var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Original Six' });
});

router.get('/blackhawks', function(req, res, next) {
  res.render('blackhawks', { title: 'Blackhawks', city: 'CHI', team:'blackhawks' });
});

router.get('/bruins', function(req, res, next) {
  res.render('bruins', { title: 'Bruins', city: 'BOS', team:'bruins' });
});

router.get('/canadiens', function(req, res, next) {
  res.render('canadiens', { title: 'Canadiens', city: 'MTL', team: 'canadiens' });
});

router.get('/mapleleafs', function(req, res, next) {
  res.render('mapleleafs', { title: 'Maple Leafs', city: 'TOR', team: 'mapleleafs' });
});

router.get('/rangers', function(req, res, next) {
  res.render('rangers', { title: 'Rangers', city: 'NYC', team: 'rangers' });
});

router.get('/redwings', function(req, res, next) {
  res.render('redwings', { title: 'Red Wings', city: 'DET', team: 'redwings' });
});

module.exports = router;
