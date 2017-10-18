var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require("request");
var cheerio = require("cheerio");
var Article = require('./models/newsModel.js');
var cors = require('cors');


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

/* ************* */
/* MongoDB stuff */
/* ************* */

mongoose.connect("mongodb://localhost/SaintPaschalDevelopment");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

/* ************* */
/* ************* */
/* ************* */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


//////////////    SCRAPING STUFf    ///////////////////

request("https://www.catholicculture.org/news/week.cfm", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);
  var counter = 0;

  $(".home_headline").each(function(i, element) {

        var result = {};
        result.link = "https://www.catholicculture.org"
        result.link += $(this).children('a').attr("href");
        result.text = $(this).children('a').text();

        console.log('Link: ' + result.link);
        console.log('Text: ' + result.text);

        var entry = new Article(result);

        if(counter < 10){

        entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
        });

        }
        
        counter++
  });


});

/////////  SCRAPE END    //////////////

app.get("/articles", function(req, res) {
  Article.find({}, function(err, found){
    if (err){
      console.log(err);
    } else {
      console.log(found);
      res.json(found);
    }
  });

});

app.get("/admin-login", function(req, res) {
   res.sendFile(path.join("/admin-login.html"));
});

//////////////////////////////////////



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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