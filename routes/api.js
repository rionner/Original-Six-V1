var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    'message': 'test'
  });
});


module.exports = router;
