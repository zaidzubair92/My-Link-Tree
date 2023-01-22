var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST create user */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.status(201).send('Created');
});

module.exports = router;
