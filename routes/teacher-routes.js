//Require models
var models = require('../models');

//Routes
module.exports = function(app, passport) {
    app.get("/teacher/students", isLoggedIn, function(req, res){
        //get the current user id
        //use where for current user id
        //get all that staff member's students in this form:
            //student name (full)
            //behavior 1
            //behavior 2
            //behavior etc.
        models.user.findAll({
        }).then(function(dbData){
            console.log(dbData);
            res.json(dbData);
        });
    });

    //PLEASE KEEP THIS LAST IN ORDER
    //Custom middleware to protect dashboard route
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}