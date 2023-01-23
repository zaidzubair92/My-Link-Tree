var express = require('express');
var router = express.Router();
const controller = require('../../controllers/UserController');

router.route('/')
.get(controller.getAllUsers)
.post(controller.createUser)
.put(controller.updateUser);

router.route('/:id')
.get(controller.getUserById)
.delete(controller.deleteUser);

module.exports = router;
