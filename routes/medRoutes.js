var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/medication", function(req, res) {
    db.Medication.findAll({}).then(function(dbMeds) {
      res.json(dbMeds);
    });
  });

  // Create a new example
  app.post("/api/medication", function(req, res) {
    db.Medication.create(req.body).then(function(dbMed) {
      res.json(dbMed);
    });
  });

  // Delete an example by id
  app.put("/api/medication/:id", function(req, res) {
    db.Medication.update({ where: { id: req.params.id } }).then(function(dbMed) {
      res.json(dbMed);
    });
  });
};
