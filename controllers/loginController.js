const User = require('../models/user');


exports.login = (req, res, next) => {
    res.render('login', { title: 'Login'});
};



exports.login_post = (req, res, next) => {

};

exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/')
};


