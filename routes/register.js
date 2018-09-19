const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

/* GET home page. */
router.get('/', registerController.register);

router.post('/', registerController.register_post);

module.exports = router;
