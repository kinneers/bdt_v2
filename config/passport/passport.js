var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //Serialize function- saves user id in session to use to manage retreiving user details when needed
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    //Deserialize function- uses Sequelize findById promise to get user and, if successful, return instance of Sequelize model
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    //Local strategy for signup (will be needed for use when signing users up as the password encryption is here)
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true //allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
    
        User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = 
                        {
                            username: username,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //Local strategy for sign-in
    passport.use('local-signin', new LocalStrategy(
        {
            //by default, local strategy uses username and password- it is overridden here with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true //allows the entire request to be passed to the callback
        },

        function(req, username, password, done) {
            var User = user;
            //Compares password using the same method we used to encrypt it
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
                //Checks that the user exists in the database
                if (!user) {
                    return done(null, false, {
                        message: 'Username does not exist.'
                    });
                }
                //Checks that the user has entered the correct password
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect credentials. Please try again.'
                    });
                }

                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function(err) {
                // eslint-disable-next-line no-console
                console.log("Error: ", err);
                return done(null, false, {
                    message: 'Something went wrong with your sign in.'
                });
            });
        }
    ));
}