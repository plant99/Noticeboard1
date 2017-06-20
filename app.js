//Dependencies
var express = require('express'); // The main framework
var path = require('path'); // Used to merge paths efficiently 
var bodyParser = require('body-parser'); //used to parse body of the request
var logger = require('morgan'); // used to log request url type and response code in the terminal
var cookieParser = require('cookie-parser')

var app = express();

//require controller
var initDb = require('./config/mongoInit.js').initDb ;
initDb() ;

superSecret = require('./config/config').key ;

//require routes
var loginHandler = require('./routes/loginHandler.js')
var signUpHandler = require('./routes/signUpHandler.js')
var boardGenerator = require('./routes/boardGenerator')
var getNotice = require('./routes/getNotice')
var saveNotice = require('./routes/saveNotice')
var deleteHandler = require('./routes/deleteHandler')

//require middlewares

var authenticate = require('./middlewares/authenticate')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Static files provider for public directory
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.get('/',function(req,res,next){
	console.log(25)
	res.render('signup')
})
app.use('/login',loginHandler)
app.use('/signup',signUpHandler)

app.use(authenticate)

app.get('/add_new',function(req,res,next){
	res.render('addNotice')
})
app.use('/board', boardGenerator)
app.use('/get_notice', getNotice)
app.use('/save_notice', saveNotice)
app.use('/delete/:header',function(req, res, next){
  res.render('deletePage',{header: req.params.header})
})
app.use('/deleteItem',deleteHandler)
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