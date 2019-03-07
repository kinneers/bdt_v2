//Require models
var models = require('../models');

var currentUser; //username of currently logged in user

//Gets the current user's username
function userNow() {
    $.get('/current-user', function(current_user) {
        currentUser = current_user.username;
        console.log(currentUser + ' is the current user.');
        return currentUser;
    })    
}
userNow();

//Routes
// module.exports = function(app, passport) {
//     app.get("/teacher/students", isLoggedIn, function(req, res){
//         models.user.findAll({
//         }).then(function(dbData){
//             console.log(dbData);
//             res.json(dbData);
//         });
//     });

module.exports = function(app, passport) {
    app.get("/teacher/students", isLoggedIn, function(req, res){
<<<<<<< HEAD
        models.sequelize.query("SELECT CONCAT(S_TS.firstName, ' ', S_TS.lastName) AS studentname, B.behavior FROM ( SELECT S.userName, S.firstName, S.lastName FROM behavior_db.students AS S INNER JOIN behavior_db.teacherstudents AS TS ON S.userName = TS.StudentUserName WHERE TS.TeacherUserName = currentUser) AS S_TS INNER JOIN behavior_db.behaviors AS B ON B.StudentUserName = S_TS.userName;").spread((dbData, metadata) => {
            console.log("METADATA: ", metadata)
            console.log("DBDATA: ", dbData)
=======
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
>>>>>>> 046ece57fd4aca96d58af0c72c999f7a03e51822
            res.json(dbData);
          })

        });


    //PLEASE KEEP THIS LAST IN ORDER
    //Custom middleware to protect dashboard route
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}