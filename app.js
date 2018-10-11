const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');

//ROUTES
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const additionRouter = require('./routes/mathRoutes/addition');
const subtractionRouter = require('./routes/mathRoutes/subtraction');
const multiplicationRouter = require('./routes/mathRoutes/multiplication');
const countingRouter = require('./routes/mathRoutes/counting');


const app = express();


//Database Config
mongoose.Promise = require('bluebird');
const db = mongoose.connection;
const url = process.env.MONGODB_URI || 'mongodb://localhost/mathapp';
mongoose.connect(url, {useNewUrlParser: true});

db.on('err', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/addition', additionRouter);
app.use('/subtraction', subtractionRouter);
app.use('/multiplication', multiplicationRouter);
app.use('/counting', countingRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
