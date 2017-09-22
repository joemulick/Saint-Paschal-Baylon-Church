var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var request = require("request");
var cheerio = require("cheerio");
var Article = require('.models/newsModel.js')

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


var index = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');

// express session
// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true
// }))
// added 9 / 19 for secure login (possible this is not needed)

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
app.get("/scrape", function(req, res) {
request("https://www.catholicnewsagency.com/headlines/", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);
  // Empty arrays to save the data that we'll scrape
  var resultLink = [];
  var resultImage = [];
  var resultTitle = [];
  var resultText = [];
  var resultEverything =[];
  var articleCounter = 0;
  /////// Scrapes Everything /////////

    $(".noticia_list_contenedor").each(function(i, element) {
      while(articleCounter < 9){
      var everything = $(this).text();
      //http://www.catholicnewsagency.com/headlines/
      resultEverything.push({ everything: everything });
      articleCounter++;
      } return resultEverything

    });

    var article = new Article({
        body: req.body.body
    });

  console.log("Everything: " + resultEverything);
  /////// Scrape Everything End /////////

  /////// Scrapes Link /////////
    articleCounter = 0;
    $(".noticia_list_imagen").each(function(i, element) {
       
    while(articleCounter < 9){
    var imgLink = $(element).attr("src");
    resultLink.push({ imgLink : imgLink });
    articleCounter++;
    } return 
    });

    console.log("Links: " + JSON.stringify(resultLink[3])+ "  " + JSON.stringify(resultLink[3]));
    // Image url gets captured correctly but you need to json stringify it to see its contents in string form

  ////////// Scrape Link End ////////////

  /////// Scrapes Title /////////
   
    articleCounter = 0;
    
    $(".noticia_list_title").each(function(i, element) {
      
      while(articleCounter < 9){ 
      
      var title = $(this).text();
      resultTitle.push({ title : title });
      
      articleCounter++;
      } return
    });

  console.log("Title's: " + JSON.stringify(resultTitle[3]) + " " + JSON.stringify(resultTitle[11]));
  /////// Scrapes Title End /////////

    /////// Scrapes Summary Text /////////
    articleCounter = 0;
    $(".noticia_list_body").each(function(i, element) {
      
      while(articleCounter < 9){ 
      var summary = $(this).text();
      resultText.push({ summary : summary });
      articleCounter++;
      } return
    });

  console.log("Summary text: " + JSON.stringify(resultText[3]) + " " + JSON.stringify(resultText[3]));
  /////// Scrapes Summary Text /////////
});

res.send('scrape complete');

});

/////////  SCRAPE END    //////////////


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