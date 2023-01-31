var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('home page view');
  res.render('index', { title: 'My LinkTree Backend' });
});

router.get('/home', function(req, res, next) {
  console.log('home page json');
  res.send({test: "this is a json"});
});

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

module.exports = router;
