var db = require("../models");

module.exports = function(app) {
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
