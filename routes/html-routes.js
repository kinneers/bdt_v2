//Require dependency
var path = require('path');

//Set HTML Routes
module.exports = function(app) {
    // //Index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    //Route to log-in page
    app.get('/log-in', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    //Route to any unknown page loads log-in.html
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/log-in.html"));
    });

    // //Route to settings page
    // app.get('/settings', function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/settings.html"));
    // });

    // //Teacher reporting route loads table-custom-elements.html
    // app.get("/teacher-reporting", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/table-custom-elements.html"));
    // });

    // //Student charts route loads line-charts.html
    // app.get('/student-charts', function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/line-charts.html"));
    // });
};
