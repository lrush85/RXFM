var db = require("../models");

module.exports = function(app) {
   app.get("/", function(req, res, next) {
    res.render("index");
  });



  // Load example page and pass in an example by id
  app.get("/medication/:medicationName", function(req, res) {
    db.Medication.findAll({
      where: {
        Generic_Name: req.params.medicationName
      }
    }).then(function(dbMed) {
      res.json({
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
