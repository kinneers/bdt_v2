//Require dependency
var path = require('path');

//Set HTML Routes
module.exports = function(app) {
    //Route to sign-up page
    app.get('/signup', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
};
