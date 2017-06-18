//Dependencies
var express = require('express'); // The main framework
var path = require('path'); // Used to merge paths efficiently 
var bodyParser = require('body-parser'); //used to parse body of the request
var logger = require('morgan'); // used to log request url type and response code in the terminal


var app = express();

//require controller
var initDb = require('./config/mongoInit.js').initDb ;
initDb() ;

//require routes
var loginHandler = require('./routes/loginHandler.js')
var signUpHandler = require('./routes/signUpHandler.js')

//require middlewares

var authenticate = require('./middlewares/authenticate')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
app.use('/login',loginHandler)
app.use('/signup',signUpHandler)

app.use(authenticate)


// Static files provider for public directory
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(err, req, res, next) {
	console.log(err)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end('error');
});

app.listen(3000)