//Require models
var models = require('../models');
var path = require('path');

//Routes
module.exports = function(app, passport) {
    app.get("/teacher/students", isLoggedIn, function(req, res){
        models.user.findAll({
        }).then(function(dbData){
            console.log(dbData);
            res.json(dbData);
        });
    });

    // //Route to get the student names and behaviors belonging to current staff user-LOCAL
    // app.get("/teacher/students", isLoggedIn, function(req, res){
    //     var currentUser = req.user.username;
    //     models.sequelize.query(`SELECT CONCAT(S_TS.firstName, ' ', S_TS.lastName) AS studentname, B.behavior FROM ( SELECT S.userName, S.firstName, S.lastName FROM behavior_db.students AS S INNER JOIN behavior_db.teacherstudents AS TS ON S.userName = TS.studentUserName WHERE TS.teacherUserName = '${currentUser}') AS S_TS INNER JOIN behavior_db.behaviors AS B ON B.studentUserName = S_TS.userName;`).spread((dbData, metadata) => {
    //         console.log("METADATA: ", metadata)
    //         console.log("DBDATA: ", dbData)
    //         res.json(dbData);
    //     });
    // });  

    //Route in Production (comment out lines 14-22)
    //Route to get the student names and behaviors belonging to current staff user for display in rating table
    app.get("/teacher/students", isLoggedIn, function (req, res) {
        var currentUser = req.user.username;
        models.sequelize.query(`SELECT CONCAT(S_TS.firstName, ' ', S_TS.lastName) AS studentname, B.behavior, B.id FROM ( SELECT S.userName, S.firstName, S.lastName FROM ifqqmoj8gh2zitgi.Students AS S INNER JOIN ifqqmoj8gh2zitgi.Teacherstudents AS TS ON S.userName = TS.StudentUserName WHERE TS.TeacherUserName = '${currentUser}') AS S_TS INNER JOIN ifqqmoj8gh2zitgi.Behaviors AS B ON B.StudentUserName = S_TS.userName;`).spread((dbData, metadata) => {
            res.json(dbData);
        });
    });

    // //Send dates for bx chart
    // app.post('/sendID', isLoggedIn, function(req, res) {
    //     app.set('id', req.body.behavid);
    // });
    // app.get('/dates', isLoggedIn, function(req, res) {
    //     //console.log('BehavID: ', parseInt(req)); //This is the behavior id
    //     var bxID = {retrievedData: app.get('data')};
    //     models.sequelize.query(
    //         `SELECT DISTINCT DATE(createdAt) AS date FROM behavior_db.behavdata WHERE BehaviorId = '${bxID}' ORDER BY date;`
    //     ).spread((dates, metadata) => {
    //         res.json(dates);
    //     })
    // });

    // //Send averages for bx chart
    // app.get('/chartdata', isLoggedIn, function(req, res) {
    //     console.log(req.body); //This is the behavior id
    //     var bxID = req.body;
    //     // models.sequelize.query(

    //     // ).spread((chartData, metadata) => {
    //     //     res.json(chartData);
    //     // })
    // });

    //PLEASE KEEP THIS LAST IN ORDER
    //Custom middleware to protect dashboard route
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}