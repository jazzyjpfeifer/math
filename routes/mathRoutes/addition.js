const express = require('express');
const router = express.Router();

const additionController = require('../../controllers/mathControllers/additionController');

/* GET home page. */
router.get('/', additionController.addition);

module.exports = router;
