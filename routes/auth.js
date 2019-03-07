//Require dependency
var path = require('path');

//Passing passport in from server.js as a parameter
module.exports = function(app, passport) {
    
    // //Route for sign-up- will not be needed until admin page is ready
    app.get('/signup', function(req, res) {
        res.sendFile(path.join(__dirname, "../public_test/signup.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    app.get("/signin", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    //Route for posting to signup- not needed right now- admin signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));

    //Route to Dashboard- isLoggedIn protects the router
    app.get('/dashboard', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/table-custom-elements.html"));
    });
    //Gets username of current user from the server
    app.get("/current-user", isLoggedIn, function(req, res) {
        res.send({ username: req.user.username });
    });

    //Ends session and returns user to log-in page
    app.get("/logout", function(req, res) {
        req.logout();
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    //Ends session and returns user to log-in page
    app.post("/logout", function(req, res) {
        req.logout();
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    //Route for posting to log-in
    app.post('/signin', passport.authenticate('local-signin', { 
        successRedirect: '/dashboard',
        failureRedirect: '/signin',
    }));

    //PLEASE KEEP THIS LAST IN ORDER
    //Custom middleware to protect dashboard route
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}
