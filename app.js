var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res) {
  if(err){
  	console.log(err);
  	res.end(err)
  }else{
  	res.end('The  end')
  }
});

app.listen(3000)