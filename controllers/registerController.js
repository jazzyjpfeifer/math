const passport = require('passport');

const User = require('../models/user');


exports.register = (req, res, next) => {
    res.render('register', { title: 'Sign Up!'});
};

exports.register_post = (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        isAdmin: false
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render('register')
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect('/');
        });
    });
};








