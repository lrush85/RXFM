/* eslint-disable prettier/prettier */
//load bcrypt
var bCrypt = require("bcrypt-nodejs");

module.exports = function (passport, admin) {
    var Admin = admin;

    var LocalStrategy = require("passport-local").Strategy;
    passport.use(
        "local-signup",
        new LocalStrategy({
                usernameField: "username",
                passwordField: "password",
                passReqToCallback: true
            },
            function (req, username, password, done) {
                var generateHash = function (password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                };

                Admin.findOne({
                    where: {
                        username: username
                    }
                }).then(function (admin) {
                    if (admin) {
                        return done(null, false, {
                            message: "That username is already taken"
                        });
                    } else {
                        var userPassword = generateHash(password);

                        var data = {
                            usernam: username,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };

                        Admin.create(data).then(function (newUser, created) {
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
        )
    );
};