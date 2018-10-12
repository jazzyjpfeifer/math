const express = require('express');
const router = express.Router();
const passport = require('passport');
const loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.login);

router.post('/', passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), loginController.login_post);

router.get('/logout', loginController.logout);

module.exports = router;
