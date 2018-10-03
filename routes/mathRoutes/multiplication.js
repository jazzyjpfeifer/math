const express = require('express');
const router = express.Router();

const multiplicationController = require('../../controllers/mathControllers/multiplicationController');

/* GET home page. */
router.get('/', multiplicationController.multiplication);

module.exports = router;
