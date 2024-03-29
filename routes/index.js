const express = require('express');
const SampleController = require('../controllers/SampleController');
const router = express.Router();

/*
When you made a controller and put it to controllers folder, you would do this here:

const UserController = require('../controllers/UserController');

and then:

router.get('/', UserController.getAllUsers);

It'll be more automated as soon as possible.
*/

// Define routes

router.get('/sample', SampleController.getIndex)

module.exports = router;