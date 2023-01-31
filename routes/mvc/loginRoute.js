const express = require('express');
const app = express();
const router = express.Router();
const controller = require('../../controllers/UserController');
const jwt = require('jsonwebtoken');

app.use(express.json);

router.route('/createToken')
.post(controller.createAccessToken);

router.route('/')
.get(controller.authenticateToken)

module.exports = router;