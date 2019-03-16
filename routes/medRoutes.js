var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/medication/:id", function(req, res) {
    db.Medication.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMeds) {
      res.json(dbMeds);
    });
  });

  app.get("/api/medication", function(req, res) {
    db.Medication.findAll({}).then(function(dbMeds) {
      res.json(dbMeds);
    });
  });

  // Create a new example
  app.post("/api/medication", function(req, res) {
      db.Medication.create({
      Generic_Name: req.body.generic_name,
      Brand_Name: req.body.brand_name,
      Class: req.body.class,
      Uses: req.body.uses,
      Side_Effects: req.body.side_effects,
      Rationale: req.body.rationale,
      DC_Plan: req.body.dc_plan,
      Withdrawal: req.body.withdrawal
    })
      .then(function(dbMed) {
        res.json(dbMed);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  
  app.put("/api/medication/:id", function(req, res) {
    db.Medication.update({ where: { id: req.params.id } }).then(function(
      dbMed
    ) {
      res.json(dbMed);
    });
  });

  app.delete("/api/medication/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
};
