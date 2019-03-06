//Require dependency
var path = require('path');
var models = require("../models");

//Passing passport in from server.js as a parameter
module.exports = function(app, passport) {
app.get("/teacher/students", isLoggedIn, function(req, res){
    models.Students.findAll({
        
    }).then(function(dbData){
        console.log(dbData);
        res.JSON(dbData);
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