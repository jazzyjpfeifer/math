const express = require('express');
const router = express.Router();

const countingController = require('../../controllers/mathControllers/countingController');

/* GET home page. */
router.get('/', countingController.counting);

module.exports = router;
