var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  // Load index page
  app.get("/", function(req, res) {
    db.Medication.findAll({}).then(function(dbMeds) {
      res.render("index");
    });
=======
   app.get("/", function(req, res, next) {
    res.render("index");
>>>>>>> 1a489b03bc4122e100ef4c32890631a7c5411a69
  });



  // Load example page and pass in an example by id
  app.get("/medication/:medicationName", function(req, res) {
    db.Medication.findAll({
      where: {
        Generic_Name: req.params.medicationName
      }
    }).then(function(dbMed) {
<<<<<<< HEAD
      res.render("index", {
=======
      res.json({
>>>>>>> 1a489b03bc4122e100ef4c32890631a7c5411a69
        medication: dbMed
      });
    });
  });





  app.get("/admin", function(req, res) {
    res.render("admin");
  });

  app.get("/admin/all", function(req, res) {
    db.Medication.findAll({}).then(function(dbMed) {
      res.render("admin-database");
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
