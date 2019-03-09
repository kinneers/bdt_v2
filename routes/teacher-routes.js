//Require models
var models = require('../models');
var path = require('path');

//Routes
module.exports = function (app, passport) {
    //Route to get the student names and behaviors belonging to current staff user for display in rating table
    app.get("/teacher/students", isLoggedIn, function (req, res) {
        var currentUser = req.user.username;
        models.sequelize.query(`SELECT CONCAT(S_TS.firstName, ' ', S_TS.lastName) AS studentname, B.behavior, B.id FROM ( SELECT S.userName, S.firstName, S.lastName FROM behavior_db.students AS S INNER JOIN behavior_db.teacherstudents AS TS ON S.userName = TS.StudentUserName WHERE TS.TeacherUserName = '${currentUser}') AS S_TS INNER JOIN behavior_db.behaviors AS B ON B.StudentUserName = S_TS.userName;`).spread((dbData, metadata) => {
            res.json(dbData);
        })
    });

    app.post("/ratings", isLoggedIn, function (req, res) {
        //console.log("Body", req.body);
        models.Behavdata.create(req.body, function (request, response, err) {
            if (!err) {
                //console.log('no error')
                res.status(200).send("Data Submitted");
            }
        });
        //models.sequelize.update();
    });

    //Route to chart page on click of behavior
    app.get('/chartdata/:behavid', isLoggedIn, function(req, res) {
        models.Behavdata.findAll({
            where: {
              BehaviorId: req.params.behavid
            }
        }).then(function(result) {
            res.sendFile(path.join(__dirname, "../public/line-charts.html"));
            res.json(result);
        });
    });

    //PLEASE KEEP THIS LAST IN ORDER
    //Custom middleware to protect dashboard route
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}