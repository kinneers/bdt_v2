//Require models
var models = require('../models');

//Routes
module.exports = function(app, passport) {
    //Route to get the student names and behaviors belonging to current staff user for display in rating table
    app.get("/teacher/students", isLoggedIn, function(req, res){
        var currentUser = req.user.username;
        models.sequelize.query(`SELECT CONCAT(S_TS.firstName, ' ', S_TS.lastName) AS studentname, B.behavior, B.id FROM ( SELECT S.userName, S.firstName, S.lastName FROM behavior_db.students AS S INNER JOIN behavior_db.teacherstudents AS TS ON S.userName = TS.StudentUserName WHERE TS.TeacherUserName = '${currentUser}') AS S_TS INNER JOIN behavior_db.behaviors AS B ON B.StudentUserName = S_TS.userName;`).spread((dbData, metadata) => {
            res.json(dbData);
        })
    });

    app.post("/ratings", isLoggedIn, function(req, res){
        console.log('The ratings have been sent to the server.');
        res.send('The ratings have been received by the server... response needs to be prepared...'); //Delete me
        //Use lines 9 through 11 above as template code for this (lines 15 and 16 are just to check that it is going through)
    })

    //PLEASE KEEP THIS LAST IN ORDER
    //Custom middleware to protect dashboard route
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}