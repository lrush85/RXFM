var db = require("../models");

module.exports = function(app) {
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
      Generic_Name: req.body.Generic_Name,
      Brand_Name: req.body.Brand_Name,
      Class: req.body.Class,
      Uses: req.body.Uses,
      Side_Effects: req.body.Side_Effects,
      Rationale: req.body.Rationale,
      DC_Plan: req.body.DC_Plan,
      Withdrawal: req.body.Withdrawal
    })
      .then(function(dbMed) {
        res.json(dbMed);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.put("/api/medication/", function(req, res) {
    db.Medication.update(
      {
        Generic_Name: req.body.Generic_Name,
        Brand_Name: req.body.Brand_Name,
        Class: req.body.Class,
        Uses: req.body.Uses,
        Side_Effects: req.body.Side_Effects,
        Rationale: req.body.Rationale,
        DC_Plan: req.body.DC_Plan,
        Withdrawal: req.body.Withdrawal
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbMed) {
      res.json(dbMed);
    });
  });

  app.delete("/api/medication/:id", function(req, res) {
    db.Medication.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMed) {
      res.json(dbMed);
    });
  });
};
