var db = require("../models");
var passport = require("passport");

var myVars = {
  domain: "rxfm.auth0.com",
  clientID: "Rq88rtx1gWAKHk2VGIJIWPMcUrM7l0Nb",
  clientSecret:
    "MgxkylB9pvWFTblODFWz0NMmxVXiTzXXvSJPoiymOECvGf-PAtole_9KVt9WtyLT",
  callbackURL: "https://ancient-dawn-39175.herokuapp.com/callback"
};

module.exports = function(app) {
  app.get(
    "/login",
    passport.authenticate("auth0", {
      clientID: myVars.clientID,
      domain: myVars.domain,
      redirectUri: myVars.callbackURL,
      responseType: "code",
      audience: "https://rxfm.auth0.com/userinfo",
      scope: "openid profile"
    }),
    function(req, res) {
      res.redirect("/");
    }
  ),
  app.get("/user", function(req, res, next) {
    res.render("user", {
      user: req.user
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/admin", function(req, res) {
    db.Admin.findAll({}).then(function(dbAdmin) {
      res.json(dbAdmin);
    });
  });

  app.get("/api/admin/:id", function(req, res) {
    db.Admin.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAdmin) {
      res.json(dbAdmin);
    });
  });

  app.post("/api/admin", function(req, res) {
    db.Admin.create(req.body).then(function(dbAdmin) {
      res.json(dbAdmin);
    });
  });
};
