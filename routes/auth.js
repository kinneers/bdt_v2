var authController = require('../controllers/authcontroller.js');

//Passing passport in from server.js as a parameter
module.exports = function(app, passport) {
    //Route for sign-up
    app.get('/signup', authController.signup);
    //Route for sign-in
    app.get('/signin', authController.signin);

    //Route for posting to signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));
}