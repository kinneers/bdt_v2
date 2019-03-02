//Dependencies
var express = require('express');
//Set up port for development or Heroku
var PORT = process.env.PORT || 8000;
var app = express();
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();

//Route to login screen
app.get('/', function(req, res) {
    res.send('This Works');
});

//Require models
var models = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
//THIS WILL CHANGE WITH AUTHENTICATION- not sure if it will be used or not
//app.use(express.static("public"));

// Set up parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Initialize passport and the express session and passport session, adding both as middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// //Routes
// require("./routes/admin-routes.js")(app);
// require('./routes/html-routes.js')(app);
// require("./routes/student-routes.js")(app);
// require("./routes/teacher-routes.js")(app);

//Set up db and start server listening
models.sequelize.sync().then(function() {
  app.listen(PORT, function(err) {
      if (!err) {
        console.log("Listening on port: " + PORT);
      }
      else {
          console.log('Something went wrong...');
      }
  });
});