var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: "Kenneth", occupation: "Studerende"});
});
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/', function(req, res, next) {
  res.render('worlddb', { title: 'World database', test: "some text to test" });
});

module.exports = router;
