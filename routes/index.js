var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Original Six' });
});

router.get('/blackhawks', function(req, res, next) {
  res.render('blackhawks', { title: 'Blackhawks', city: 'CHI' });
});

router.get('/bruins', function(req, res, next) {
  res.render('bruins', { title: 'Bruins', city: 'BOS' });
});

router.get('/canadiens', function(req, res, next) {
  res.render('canadiens', { title: 'Canadiens', city: 'MTL' });
});

router.get('/mapleleafs', function(req, res, next) {
  res.render('mapleleafs', { title: 'Maple Leafs', city: 'TOR' });
});

router.get('/rangers', function(req, res, next) {
  res.render('rangers', { title: 'Rangers', city: 'NYC' });
});

router.get('/redwings', function(req, res, next) {
  res.render('redwings', { title: 'Red Wings', city: 'DET' });
});

module.exports = router;
