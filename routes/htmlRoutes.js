var db = require("../models");
var Op = require("sequelize").Op;

module.exports = function(app) {
  

   app.get("/", function(req, res, next) {
    res.render("index");
  });



  // Load example page and pass in an example by id
  app.get("/medication/:medicationName", function(req, res) {
    var medName = req.params.medicationName
    console.log(medName)

    db.Medication.findAll({
      where: {[Op.or]: [{Generic_Name: medName},{Brand_Name: medName}]
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
  app.get("*", function(req, res) {
    res.render("404");
  });
};
