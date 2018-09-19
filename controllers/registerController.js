const User = require('../models/user');


exports.register = (req, res, next) => {
    res.render('register', { title: 'Sign Up!'});
};

exports.register_post = (req, res) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false
    });
    newUser.save(function (err) {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/');
        }

    })



};

