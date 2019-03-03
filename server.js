//Dependencies
var passport = require('passport');
var ConnectRoles = require('connect-roles');
var express = require('express');
var session = require('express-session');
require('dotenv').load();
var exphbs = require('express-handlebars');
var path = require('path');

//Set up port for development or Heroku
var PORT = process.env.PORT || 8000;
var app = express();

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

// Serve static content for the app from the "public" directory in the application directory.
// Routes will take care of authentication and serving the correct pages
app.use(express.static("public"));

// //For Connect-roles
// app.use(user.middleware());

// var user = new ConnectRoles({
//     failureHandler: function (req, res, action) {
//         // optional function to customize code that runs when
//         // user fails authorization
//         var accept = req.headers.accept || '';
//         res.status(403);
//         if (~accept.indexOf('html')) {
//             res.render('access-denied', {action: action});
//         } else {
//             res.send('Access Denied - You don\'t have permission to: ' + action);
//         }
//     }
// });

// //anonymous users can only access the home page
// //returning false stops any more rules from being
// //considered
// user.use(function (req, action) {
//     if (!req.isAuthenticated()) return action === 'access login page';
// });
    
// //moderator users can access private page, but
// //they might not be the only ones so we don't return
// //false if the user isn't a moderator
// user.use('access student page', function (req) {
//     if (req.user.role === 'student') {
//         return true;
//     }
// });

// user.use('access teacher page', function (req) {
//     if (req.user.role === 'teacher') {
//         return true;
//     }
// });
    
// //admin users can access all pages
// user.use(function (req) {
//     if (req.user.role === 'admin') {
//         return true;
//     }
// });

//For Handlebars
app.set('views', './views');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// //Index route loads log-in.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/log-in.html"));
});

//Route to log-in page
app.get('/log-in', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/log-in.html"));
});

//Route to any unknown page loads log-in.html
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/log-in.html"));
// });

// //Not sure if 'private' is right here...
// app.get('/student', user.can('access student page and his/her own data'), function(req, res){
//     res.render('student');
// });

// app.get('/teacher', user.can('access teacher page'), function(req, res) {
//     res.render('teacher');
// });

// app.get('/admin', user.can('access admin page'), function(req, res){
//     res.render('admin');
// });

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
