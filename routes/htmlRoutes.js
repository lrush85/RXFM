var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Medication.findAll({}).then(function(dbMeds) {
      res.render("index");
    });
  });

  // Load example page and pass in an example by id
  app.get("/medication/:id", function(req, res) {
    db.Medication.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMed) {
      res.render("index", {
        medication: dbMed
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });


  app.get("/admin", function(req, res) {
    res.render("admin");
  });



  app.get("/admin/all", function(req, res) {
    db.Medication.findAll({}).then(function(dbMed) {
      res.render("admin-database");
    });
  });
};
