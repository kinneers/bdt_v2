//Dependencies
var express = require('express');
//Set up port for development or Heroku
var PORT = process.env.PORT || 8000;
var app = express();
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

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

//For Handlebars
app.set('views', './views');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Route to home screen
app.get('/', function(req, res) {
    res.send('This Works');
});

//Require models
var models = require("./models");

// //Routes
var authRoute = require('./routes/auth.js')(app, passport); //Adds auth.js as an argument to be passed into auth.js
// require("./routes/admin-routes.js")(app);
// require('./routes/html-routes.js')(app);
// require("./routes/student-routes.js")(app);
// require("./routes/teacher-routes.js")(app);

// Load Passport Strategies (keep below the routes import)
require('./config/passport/passport.js')(passport, models.user);

// Serve static content for the app from the "public" directory in the application directory.
//THIS WILL CHANGE WITH AUTHENTICATION- not sure yet if it will be used or not
//app.use(express.static("public"));

//Set up db and start server listening
models.sequelize.sync().then(function() {
  app.listen(PORT, function(err) {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log("Listening on port: " + PORT);
      }
      else {
          // eslint-disable-next-line no-console
          console.log('Something went wrong...');
      }
  });
});
