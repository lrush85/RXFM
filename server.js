require("dotenv").config();
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

var myVars = {
  domain: "rxfm.auth0.com",
  clientID: "Rq88rtx1gWAKHk2VGIJIWPMcUrM7l0Nb",
  clientSecret:
    "MgxkylB9pvWFTblODFWz0NMmxVXiTzXXvSJPoiymOECvGf-PAtole_9KVt9WtyLT",
  callbackURL: "https://ancient-dawn-39175.herokuapp.com/callback"
};

var strategy = new Auth0Strategy(
  {
    domain: "rxfm.auth0.com",
    clientID: "Rq88rtx1gWAKHk2VGIJIWPMcUrM7l0Nb",
    clientSecret:
      "MgxkylB9pvWFTblODFWz0NMmxVXiTzXXvSJPoiymOECvGf-PAtole_9KVt9WtyLT",
    callbackURL: "https://ancient-dawn-39175.herokuapp.com/callback"
  },
  function(accessToken, refreshToken, extraParam, profile, done) {
    return done(null, profile);
  }
);

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
// Middleware

app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(
  session({
    secret: "secret key",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != "undefined") {
    res.locals.loggedIn = true;
  }
  next();
});





app.get("/callback", 
  passport.authenticate("auth0", {
    failureRedirect: "/failure"
  }),
  function(req,res){
    res.redirect("/admin");
  }
);



app.get("/failure", function(req, res, next){
  res.render("failure");
});

// app.use(express.json());
app.use(express.static("public"));


// Routes
require("./routes/adminRoute")(app);
require("./routes/medRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
