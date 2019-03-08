//Dependencies
var passport = require('passport');
var ConnectRoles = require('connect-roles');
var express = require('express');
var session = require('express-session');
require('dotenv').load();
var path = require('path');

//Set up port for development or Heroku
var PORT = process.env.PORT || 8000;
var app = express();

// Set up parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Initialize passport and the express session and passport session, adding both as middleware
app.use(session({
    secret: 'viking mania',
    resave: true,
    saveUninitialized: true
})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Serve static content for the app from the "public" directory in the application directory.
// Routes will take care of authentication and serving the correct pages
//CHECK WITH INSTRUCTORS, BUT I AM FAIRLY CERTAIN THAT KEEPING THIS BELOW app.use(passport...) WILL MAKE IT ROUTE THROUGH AUTHENTICATION FIRST...
app.use(express.static("public"));

//Require models
var models = require("./models");

// //Routes
var authRoute = require('./routes/auth.js')(app, passport); //Adds auth.js as an argument to be passed into auth.js
var teacherRoute = require('./routes/teacher-routes.js')(app, passport);

// Load Passport Strategies (keep below the routes import)
require('./config/passport/passport.js')(passport, models.user);

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
