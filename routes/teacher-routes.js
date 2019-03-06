//Require models
var models = require('../models');

//Routes
module.exports = function(app, passport) {
    app.get("/teacher/students", isLoggedIn, function(req, res){
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