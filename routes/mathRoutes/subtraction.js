const express = require('express');
const router = express.Router();

const subtractionController = require('../../controllers/mathControllers/subtractionController');

/* GET home page. */
router.get('/', subtractionController.subtraction);

module.exports = router;
